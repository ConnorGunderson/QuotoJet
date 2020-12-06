import { createSlice } from '@reduxjs/toolkit'

const manifoldSlice = createSlice({
    name: 'manifoldSlice',
    initialState: [0, 0, true], // amount of drops for the manifold
    reducers: {
        enableValve: (state) => [6000, state[1], true],
        disableValve: (state) => [4150, state[1], false],
        alterDrops: (state, action) => action.payload > 0 ? [state[0], action.payload, state[2]] : [state[0], 0, state[2]]
    }

})

export const { alterDrops, enableValve, disableValve } = manifoldSlice.actions

export default manifoldSlice.reducer