import React from 'react';
import {Redirect, Router} from '@reach/router';
import './App.css';
import VotingGauntlet from './views/VotingGauntlet';
import ErrorPage from './views/ErrorPage';
import OrbCalendar from './views/OrbCalendar';
import EditOrbCalendar from './views/EditOrbCalendar';

function App() {
    return (
        <div className="App">
            <Router>
                <Redirect from="/" to="/orb_calendar" noThrow="true" />
                <VotingGauntlet path="/voting_gauntlet" />
                <OrbCalendar path="/orb_calendar" />
                <EditOrbCalendar path="/edit_orb_calendar" />
                <ErrorPage default />
            </Router>
        </div>
    );
}

export default App;
