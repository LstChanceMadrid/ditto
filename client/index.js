import React from 'react'
import { Navigation } from "react-native-navigation";

import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/store/reducers'

import Home from './src/components/locations/Home';
import House from './src/components/locations/House'
import Battle from './src//components/battle/Battle'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))





Navigation.registerComponent(`Home`, () => (props) => (
    <Provider store={store}>
        <Home {...props}/>
    </Provider>
), () => Home);

Navigation.registerComponent(`House`, () => (props) => (
    <Provider store={store}>
        <House {...props}/>
    </Provider>
), () => House);

Navigation.registerComponent(`Battle`, () => (props) => (
    <Provider store={store}>
        <Battle {...props}/>
    </Provider>
), () => Battle);


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