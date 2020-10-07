import React from 'react';
import { Link } from '@reach/router';

export default (props) => {
    const addLoginOrbs = (e) => {
        e.preventDefault();
        console.log("Adding log-in orbs");
        // Here we edit the database accordingly by adding those orbs
    }

    const addGrandConquestOrbs = (e) => {
        e.preventDefault();
        console.log("Adding GC orbs");
        // Here we edit the database accordingly by adding those orbs
    }

    return(
        <div>
            <h1>Placeholder edit page</h1>
            <form onSubmit={addLoginOrbs}>
                <button type="submit">Add Log-in Orbs</button>
            </form>
            <form onSubmit={addGrandConquestOrbs}>
                <button type="submit">Add Grand Conquest Orbs</button>
            </form>
            {/*Here we will display a date - default today's - and can pick dates to edit */}
            {/* Also add months here accordingly - this will automatically pre-add stuff like arena orbs, RD orbs, etc. */}
            <Link to="/orb_calendar">View Orb Calendar</Link>
        </div>
    );
}