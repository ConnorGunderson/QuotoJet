import { createSlice } from '@reduxjs/toolkit'
const _ = require('lodash')



const visSlice = createSlice({
    name: 'vistabs',
    // Holds all the names of 
    // the tabs that should be visible
    initialState: {
        _tabList: [],
    },
    reducers: {
        SHOW_TAB: (state:any, action:any) => state._tabList.join(action.payload) 
        ,
        HIDE_TAB: (state:any, action:any) => _.remove(state._tabList, action.payload)
    }
})

export const { HIDE_TAB, SHOW_TAB } = visSlice.actions

export default visSlice.reducer