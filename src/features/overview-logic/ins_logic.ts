import {createSlice} from '@reduxjs/toolkit'
const _ = require('lodash');

const FNCS = {
    ALUM: function(x : number, y: number, z: number, num: number) {
        return Math.pow((x * y * z), .27692814823562) * 3.96589179639605 * num
    },
    P20: function(x : number, y: number, z: number, num: number) {
        return  Math.pow((x * y * z), .27692814823562) * 7.93178359279209 * num
    }
}

const CNC_CALC = function(insertList:any, material:string) {
    const [ x, y, z, num ] = insertList
    return (
        material === '6061 Aluminum' || '7075 Aluminum'
            ? FNCS.ALUM(x, y, z, num)
            : FNCS.P20(x, y, z, num)

    )
}

const defaultState = {
    _inserts: [
        /**
         * @Params [
         *  x,
         *  y,
         *  z,
         *  amount,
         *  CNC_HOURS,
         *  Price Per Insert
         * ]
         */
    ],
    _material: '',
    _sumInserts: 0,
    _cncTotalHours: 0,
    _subtotal: 0
}


const insertSlice = createSlice({
    name: 'insert',
    // Material | Dimensions [4] | # Inserts
    // CNC Hours | Subtotal 
    initialState: defaultState,
    reducers: {
        // change the material for the insert selection
        CHANGE_MATERIAL: (state: any, action: any) => {
            const outObj = Object.assign({}, state)
            outObj._material = action.payload
            return (
                outObj
            )
        }

        ,
        /** 
        * Add full insert array into new state slice
        * payload should have 4 indicies within an array
        *   @Param {Array} | payload | [x, y, z, #, cost_of_insert] of inserts
        **/ 
        ADD_INSERT: (state: any, action: any) : void => {
            // Destructuring payload
            const { payload } = action
            const newCube = payload.reduce(((a: number, i:number) => a * i), 1)
            const insertTotal = _.add(
                state._material === '6061 Aluminum'
                       ? newCube * .22
                       : state._material === '7075 Aluminum'
                       ? newCube * .375
                       : state._material === 'P20 Steel'
                       ? newCube * 1.06125
                       : 0
                   ,
                        state._material === '6061 Aluminum'
                        ? 5 
                        : state._material === '7075 Aluminum' 
                        ? 7 
                        : state._material === 'P20 STEEL' 
                        ? 9.9999999999 : 0
           )
           let _insertTotal = insertTotal * newCube + CNC_CALC(payload, state._material)*40
            /**
             * [
             *  payload list [x, y , z, #],
             *  x*y*z,
             *  CNC_HOURS for insert,
             *  Total for part
             * ]
             */
            state._inserts.push([
                ...payload,
                newCube,
                CNC_CALC(payload, state._material),
                _insertTotal
            ])
            // Accumulate all previous values in the array for # of inserts
            // Join with the new value and return new state
            state._sumInserts =  state._inserts.length !== 1 
                        ? state._inserts
                            .reduce(((acc:any, p:any) => acc + p[3]),0) 
                        : state._inserts
                            .reduce(((acc:any, p:any) => acc + p[3]),0)

            // FNC_ALUM OR FNC_P20 DEPENDING ON _material
            // RETURN AMOUNT OF HOURS PER EVERY PART
            state._cncTotalHours +=  CNC_CALC(payload, state._material)

            state._subtotal += _.last(state._inserts)[6]
        },
        DELETE_LAST: (state:any, action:any) => {
            if (state._sumInserts > 0 && state._inserts.length > 0) {
                const out = state._inserts.pop()
                state._sumInserts -= 1
                state._cncTotalHours -= out[5]
                if (state._inserts.length === 0) {
                    state._subtotal = 0                    
                } else {
                    state._subtotal -= out[6]
                }
            }
        }
    }
})

export const { CHANGE_MATERIAL, ADD_INSERT, DELETE_LAST } = insertSlice.actions

export default insertSlice.reducer