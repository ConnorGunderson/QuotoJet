import {createSlice} from '@reduxjs/toolkit'
const _ = require('lodash')

const FNCS = {
    ALUM: function(x : number, y: number, z: number, num: number) {
        return Math.pow((x * y * z), .27692814823562) * 3.96589179639605 * num
    },
    P20: function(x : number, y: number, z: number, num: number) {
        return  Math.pow((x * y * z), .27692814823562) * 7.93178359279209 * num
    }
}

const CNC_CALC = function(insertList:any, material:string) {
    const [X, Y, Z, NUM ] = insertList
    return (
        material === '6061 Aluminum' || '7075 Aluminum'
            ? FNCS.ALUM(X, Y, Z, NUM)
            : FNCS.P20(X, Y, Z, NUM)

    )
}

const defaultState = {
    _inserts: [
        /**
         * @Params Object: object [
         *  ID,
         *  X,
         *  Y,
         *  Z,
         *  AMT,
         *  CINCH,
         *  CNC_HOURS,
         *  PPI,
         *  MAT
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
             *  Total for part,
             *  Material Used
             * ]
             */
            const _ArrMat = _.split(state._material, ' ')[0] + ' ' + _.head(_.split(state._material, ' ')[1])
            const id = state._inserts.length === 0 ? 1 : state._inserts.length+1

            state._inserts.push(
                {
                    ID: id,
                    X: action.payload[0],
                    Y: action.payload[1],
                    Z: action.payload[2],
                    AMT: action.payload[3],
                    CINCH: newCube,
                    CNC_HOURS: CNC_CALC(payload, state._material),
                    PPI: _insertTotal,
                    MAT: _ArrMat
                }
            )
            // Accumulate all previous values in the array for # of inserts
            // Join with the new value and return new state
            state._sumInserts =  state._inserts.reduce(((acc:any, p:any) => acc + p.AMT),0)
            // FNC_ALUM OR FNC_P20 DEPENDING ON _material
            // RETURN AMOUNT OF HOURS PER EVERY PART
            state._cncTotalHours +=  CNC_CALC(payload, state._material)

            state._subtotal += _.last(state._inserts).PPI

        },
        DELETE_LAST: (state:any, action:any) => {
            if (state._sumInserts > 0 && state._inserts.length > 0) {
                const out = state._inserts.pop()
                state._sumInserts -= out.AMT
                state._cncTotalHours -= out.CNC_HOURS
                if (state._inserts.length === 0) {
                    state._subtotal = 0                    
                } else {
                    state._subtotal -= out.PPI
                }
            }
        }
    }
})

export const { CHANGE_MATERIAL, ADD_INSERT, DELETE_LAST } = insertSlice.actions

export default insertSlice.reducer