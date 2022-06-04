import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import './index.css'
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './context/AuthProvider';

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
