import { applyMiddleware, compose, createStore } from 'redux'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'
import React from 'react'
import thunk from 'redux-thunk'
import { AsyncStorage } from 'react-native'

import rootReducer from './src/store/reducers/rootReducer'

// imported root components
import Intro from './src/components/storyLine/Intro'
import Next from './src/components/storyLine/Intro'
import Battle from './src/components/battle/Battle'
import Home from './src/components/locations/home/Home';
import House from './src/components/locations/house/House'

// imported renderless logic components

import EnemyRNG from './src/components/battle/constants/EnemyRNG'

// configuring store

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

// checking for saved game in AsyncStorage

retrieveData = async () => {
    try {
        const result = await AsyncStorage.getItem('username')
        if (true) {
            Navigation.setRoot({
                root: {
                    component: {
                        id: 'Home',
                        name: "Home",
                        passProps: {
                            username: result
                        },
                        options: {
                            setRoot: {
                            animations: {
                            alpha: {
                                from: 0,
                                to: 1,
                                duration: 2400
                            }}
                        }
                        }
                    }
                }
            })
        } else {
            Navigation.setRoot({
                root: {
                    stack: {
                        id: 'IntroStack',
                        children: [{
                            component: {
                                id: 'Next',
                                name: 'Next'
                            },
                            component: {
                                id: 'Intro',
                                name: 'Intro'
                            }
                        }]
                    }
                }
            })
        }
    } catch {
        error => console.log(error)
    }
}

// navigational components

Navigation.registerComponent(`Intro`, () => (props) => (
    <Provider store={store}>
        <Intro {...props}/>
    </Provider>
), () => Intro);

Navigation.registerComponent(`Next`, () => (props) => (
    <Provider store={store}>
        <Next {...props}/>
    </Provider>
), () => Next);

Navigation.registerComponent(`Home`, () => (props) => (
    <Provider store={store}>
        <Home {...props}/>
    </Provider>
), () => Home);

Navigation.registerComponent(`Battle`, () => (props) => (
    <Provider store={store}>
        <Battle {...props}/>
    </Provider>
), () => Battle);

Navigation.registerComponent(`House`, () => (props) => (
    <Provider store={store}>
        <House {...props}/>
    </Provider>
), () => House);

Navigation.registerComponent(`EnemyRNG`, () => (props) => (
    <Provider store={store}>
        <EnemyRNG {...props}/>
    </Provider>
), () => EnemyRNG);

// set the original root upon app launch

Navigation.events().registerAppLaunchedListener(() => {

    // storeData = async () => {
    //     try {
    //        const setUsername =  await AsyncStorage.setItem(username, 'red')
    //     } catch (error) {
    //         error => console.log(error)
    //     }
    // }
    

 
    retrieveData()

     

})