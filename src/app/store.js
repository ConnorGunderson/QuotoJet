import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifoldReducer from '../logic/overview-logic/man_logic'
import insertReducer from '../logic/overview-logic/ins_logic'
import visReducer from '../logic/overview-logic/visual_logic'
import settingsReducer from '../logic/settings_logic'


// Combine all reducer logic into one root reducer
const rootReducer = combineReducers({
  manifold: manifoldReducer,
  settings: settingsReducer,
  insert: insertReducer,
  tabs: visReducer,
})


// Load state from local storage and serial for use
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)

  } catch (e) {
    console.log(e)
  }
}


// create store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})


// Saves state into local storage for data persistence
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

export default store;