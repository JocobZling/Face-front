import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {app} from './ducks/index'
import {HomePageContainer, LoginContainer} from './containers/index';


const reducer = combineReducers({
    app
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {/*<Route path={['/']} exact component={HomePageContainer}/>*/}
            <Route path='/' exact component={LoginContainer}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
