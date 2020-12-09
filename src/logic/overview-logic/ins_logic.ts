import {createSlice} from '@reduxjs/toolkit'
const _ = require('lodash')


/**
 * Names space for (6061 Aluminum or 7075) or P20 Steel Aluminum function(s) for determine final cost
 * @param {number} x:number X-axxis
 * @param {number} y:number Y-axis
 * @param {number} z:number Z-axis
 * @param {number} num:number Number of inserts
 * @returns {number}
 */
const FNCS = {
    ALUM: function(x : number, y: number, z: number, num: number) {
        return Math.pow((x * y * z), .27692814823562) * 3.96589179639605 * num
    },
    P20: function(x : number, y: number, z: number, num: number): number {
        return  Math.pow((x * y * z), .27692814823562) * 7.93178359279209 * num
    }
}



/**
 * Destructures list elements of the _insert list and calls the 
 * function associated with the correct material used
 * @param {any} insertList:any
 * @param {any} material:string
 * @returns {any} 
 */
const CNC_CALC = function(insertList:any, material:string) {
    const [X, Y, Z, NUM ] = insertList
    return (
        material === '6061 Aluminum' || '7075 Aluminum'
            ? FNCS.ALUM(X, Y, Z, NUM)
            : FNCS.P20(X, Y, Z, NUM)

    )
}

// default state for insert logic slice
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
    initialState: defaultState,
    reducers: {
        /**
         * Takes a string payload and replaces the correct _material attribute
         * within the state object
         * @param {any} state:any
         * @param {payload: string} action:any
         * @returns {object}
         */
        CHANGE_MATERIAL: (state: any, action: any) => {
            const outObj = Object.assign({}, state)
            outObj._material = action.payload
            return (
                outObj
            )
        }
        ,

        /**
         * Pushes a new insert into the _inserts array within the state namespace
         * @param {any} state:any
         * @param {payload: string[]} action:any
         *      @param {string[]} payload [X-axis, Y-axis, Z-axis, # of inserts]
         * @returns {void}
         */
        ADD_INSERT: (state: any, action: any) : void => {
            // Destructuring payload
            const { payload } = action

            // Creates the cube inch Product from the axis fields of the payload
            const newCube = payload.reduce(((a: number, i:number) => a * i), 1)

            // Calulates the total cost of the insert based on material and cube inches
            // Calculates the initial cost as well and the price per hours
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
                ) * newCube + CNC_CALC(payload, state._material) * 80

            // Array material extracted from state for new insert array
            const _ArrMat = _.split(state._material, ' ')[0] + ' ' + _.head(_.split(state._material, ' ')[1])

            // UID for insert added
            const id = state._inserts.length === 0 ? 1 : state._inserts.length+1

            /**
             * push new insert into state._inserts array
             * [
             *  @param {number} ID: unique id for the insert
             *  @param {number} XYZNUM  [x, y , z, #],
             *  @param {number} AMT: Amount of inserts,
             *  @param {number} CNC_HOURS Total amount of cnc hours needed,
             *  @param {number} PPI Price per Insert,
             *  @param {string} Material Used 6061 | 7075 | P20
             * ]
             */
            state._inserts.push(
                {
                    ID: id,
                    X: payload[0],
                    Y: payload[1],
                    Z: payload[2],
                    AMT: payload[3],
                    CINCH: newCube,
                    CNC_HOURS: CNC_CALC(payload, state._material),
                    PPI: insertTotal,
                    MAT: _ArrMat
                }
            )
            // Sum all current inserts within the _inserts array and update state
            state._sumInserts =  state._inserts.reduce(((acc:any, p:any) => acc + p.AMT),0)
            
            // Total hours needed to finish all inserts
            state._cncTotalHours +=  CNC_CALC(payload, state._material)
            
            // Cost for all operations
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