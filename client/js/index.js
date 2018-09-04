import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import store, {history} from './store/store';
import App from './App';


const target = document.getElementById('root');
const theme = createMuiTheme({});

render(
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </React.Fragment>
    </Router>
  </Provider>,
  target
);
