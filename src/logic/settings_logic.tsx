import { createSlice } from '@reduxjs/toolkit'

// Settings slice for global configuration
const settingSlice = createSlice({
    name: 'settings',
    // Estimate Cost | Injection Molding Rate | Design Rate |
    // Toolmaker Rate | CNC Rate | EDM Rate
    initialState: {
        _ER: 1.0,
        _IMR: 80.0,
        _DR: 80.0,
        _TMR: 65.0,
        _CNCR: 80.0,
        _EDMR: 85.0
    },
    reducers: {
        ESTIMATE: (state:any, action:any) => action.payload >= 0 ? {...state, _ER: action.payload} : state,
        IMR: (state:any, action:any) => action.payload >= 0 ? {...state, _IMR: action.payload} : state,
        DR: (state:any, action:any) => action.payload >= 0 ? {...state, _DR: action.payload} : state,
        TR: (state:any, action:any) => action.payload >= 0 ? {...state, _TMR: action.payload} : state,
        CNC: (state:any, action:any) => action.payload >= 0 ? {...state, _CNCR: action.payload} : state,
        EDM: (state:any, action:any) => action.payload >= 0 ? {...state, _EDMR: action.payload} : state,
    }
})

export const { ESTIMATE, IMR, DR, TR, CNC, EDM } = settingSlice.actions

export default settingSlice.reducer