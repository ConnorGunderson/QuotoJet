import { createSlice } from '@reduxjs/toolkit'


export default createSlice({
    name:'foo',
    initialState:2,
    reducers: {
        FOO: (state:any,action:any) => state
    }
})