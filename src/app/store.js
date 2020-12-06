import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifoldReducer from '../features/overview-logic/man_logic'
import settingsReducer from '../features/settings_logic'

const rootReducer = combineReducers({
  manifold: manifoldReducer,
  settings: settingsReducer
})

export default configureStore({
  reducer: rootReducer
});
