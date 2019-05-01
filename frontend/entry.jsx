import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/app.jsx';
import configureStore from '../frontend/store/store';
import {login, logout} from '../frontend/actions/session_action';

window.login = login;
window.logout = logout;


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
  });