import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, { saveState} from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import _ from 'lodash'


// Save state to local storage

store.subscribe(_.throttle(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
}),1000);


store.subscribe(() => {
  saveState({
    insert: store.getState().insert,
    manifold: store.getState().manifold,
    settings: store.getState().settings,
    tabs: store.getState().tabs
  })
})

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
