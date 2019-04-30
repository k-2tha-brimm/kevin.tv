import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../frontend/components/app.jsx';
import configureStore from '../frontend/store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, root)
})