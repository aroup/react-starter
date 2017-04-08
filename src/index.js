import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store=configureStore();
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);
