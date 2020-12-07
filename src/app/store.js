import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifoldReducer from '../features/overview-logic/man_logic'
import insertReducer from '../features/overview-logic/ins_logic'
import visReducer from '../features/overview-logic/vis_logic'
import fooReducer from '../features/overview-logic/spectools_logic'
import settingsReducer from '../features/settings_logic'

const rootReducer = combineReducers({
  manifold: manifoldReducer,
  settings: settingsReducer,
  insert: insertReducer,
  tabs: visReducer,

})

export default configureStore({
  reducer: rootReducer
});
