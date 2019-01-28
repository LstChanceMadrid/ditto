/** @format */

import React from 'react'
import { Navigation } from "react-native-navigation";
import Home from './src/components/locations/Home';
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/store/reducers'

import NewLevel from './src/components/locations/NewLevel'
const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))





Navigation.registerComponent(`Home`, () => (props) => (
    <Provider store={store}>
        <Home {...props}/>
    </Provider>
), () => Home);

Navigation.registerComponent(`NewLevel`, () => (props) => (
    <Provider store={store}>
        <NewLevel {...props}/>
    </Provider>
), () => NewLevel);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                id: 'Home',
                name: "Home"
            }
        }
    })
})