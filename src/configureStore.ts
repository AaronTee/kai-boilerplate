import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import PlaygroundRedux from 'containers/PlaygroundRedux/reducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    PlaygroundRedux
});

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
    window['devToolsExtension'] && window['devToolsExtension']()
  )
);

export { store, history };