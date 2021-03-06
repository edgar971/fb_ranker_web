import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/lib/animate.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import CRouter from './routes';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware));
store.getState();

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <Provider store={store}>
            <CRouter store={store} />
        </Provider>
    </LocaleProvider>
 ,
  document.getElementById('root')
);

registerServiceWorker();