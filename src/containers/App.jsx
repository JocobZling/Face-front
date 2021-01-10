import React from 'react';
import HomePage from "../components/Layout";
import {Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer'
import HistoryContainer from './HistoryContainer'

const HomeContainer = () => (
    <HomePage>
        <Switch>
            <Route path='/index' exact component={WelcomeContainer}/>
            <Route path='/history' exact component={HistoryContainer}/>
            <Route path='*' exact component={WelcomeContainer}/>
        </Switch>
    </HomePage>
)

export default HomeContainer;
