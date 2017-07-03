import React, { Component } from 'react'
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import Router from './Router'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class ReactNativeRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);