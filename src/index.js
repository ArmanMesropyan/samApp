import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/index';

// basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter >
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);


