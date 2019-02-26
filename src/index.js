import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './configureStore';
// import Playground from './containers/Playground';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
    
    {/* <Playground /> */}
  </Provider>
, document.getElementById('root'));