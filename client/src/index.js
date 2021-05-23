import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'; 
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';


import App from './components/App';
import reducers from './reducers';
import theme from './theme';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root')
);