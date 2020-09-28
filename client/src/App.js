import React from 'react';
import {Redirect, Router} from '@reach/router';
import './App.css';
import VotingGauntlet from './views/VotingGauntlet';
import ErrorPage from './views/ErrorPage';
import OrbCalendar from './views/OrbCalendar';

function App() {
    return (
        <div className="App">
            <Router>
                <Redirect from="/" to="/voting_gauntlet" noThrow="true" />
                <VotingGauntlet path="/voting_gauntlet" />
                <OrbCalendar path="/orb_calendar" />
                <ErrorPage default />
            </Router>
        </div>
    );
}

export default App;
