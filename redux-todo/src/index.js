import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/TaskSlice';
import App from './App';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <strictMode>
<Provider store={store}>
    <App />
  </Provider>
    </strictMode>
  
);
