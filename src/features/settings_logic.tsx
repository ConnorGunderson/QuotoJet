import { createSlice } from '@reduxjs/toolkit'
const _ = require('lodash')

const settingSlice = createSlice({
    name: 'settings',
    // Estimate Cost | Injection Molding Rate |
    // Toolmaker Rate | CNC Rate | EDM Rate
    initialState: [1,80.0,80.0,65.0,80.0,85.0],
    reducers: {
        ESTIMATE: (state, action) => action.payload >= 0 ? _.concat(action.payload, state.slice(1,6)) : state,
        IMR: (state, action) => action.payload >= 0 ? _.concat(state.slice(0,1), action.payload, state.slice(2,6)) : state,
        DR: (state, action) => action.payload >= 0 ? _.concat(state.slice(0,2), action.payload, state.slice(3,6)) : state,
        TR: (state, action) => action.payload >= 0 ? _.concat(state.slice(0,3), action.payload, state.slice(4,6)) : state,
        CNC: (state, action) => action.payload >= 0 ? _.concat(state.slice(0,4), action.payload, state.slice(5,6)) : state,
        EDM: (state, action) => action.payload >= 0 ? _.concat(state.slice(0,5), action.payload,) : state,
    }
})

export const { ESTIMATE, IMR, DR, TR, CNC, EDM } = settingSlice.actions

export default settingSlice.reducer