import { applyMiddleware, compose, createStore } from 'redux'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'
import React from 'react'
import thunk from 'redux-thunk'

import rootReducer from './src/store/reducers/rootReducer'

import Battle from './src/components/battle/Battle'
import Home from './src/components/locations/home/Home';
import House from './src/components/locations/house/House'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

// navigational components

Navigation.registerComponent(`Battle`, () => (props) => (
    <Provider store={store}>
        <Battle {...props}/>
    </Provider>
), () => Battle);

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

// set the original root upon app launch

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