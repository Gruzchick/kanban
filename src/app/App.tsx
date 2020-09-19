import 'react-toastify/dist/ReactToastify.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'emotion-theming';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';
import React, { FC, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from '../store';
import { history } from './history';
import { theme } from './theme';

const jssInsertionPoint = document.getElementById('jss-insertion-point');

if (jssInsertionPoint === null) {
  throw Error('JSS injection point do not defined in index.html file');
}

const jss = create({
  ...jssPreset(),
  plugins: [jssTemplate(), ...jssPreset().plugins],
  insertionPoint: jssInsertionPoint,
});

const App: FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <StylesProvider jss={jss}>
            <MuiThemeProvider theme={theme}>
              <ThemeProvider theme={theme}>
                <div>{'Here'}</div>
                <ToastContainer />
              </ThemeProvider>
            </MuiThemeProvider>
          </StylesProvider>
        </ConnectedRouter>
      </Provider>
    </Fragment>
  );
};

export default hot(App);
