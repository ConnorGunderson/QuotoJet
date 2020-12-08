import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifoldReducer from '../features/overview-logic/man_logic'
import insertReducer from '../features/overview-logic/ins_logic'
import visReducer from '../features/overview-logic/visual_logic'
import settingsReducer from '../features/settings_logic'

const rootReducer = combineReducers({
  manifold: manifoldReducer,
  settings: settingsReducer,
  insert: insertReducer,
  tabs: visReducer,
})

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

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}










export default store;
