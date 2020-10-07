import React, { useState } from 'react';
import { TableContainer, Table, TableRow, TableHead, TableBody, TableCell, makeStyles, Tooltip } from '@material-ui/core';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from '@reach/router';

// Type "npm i @material-ui/core" to use Material UI


// For calendars: npm i @material-ui/pickers
// Link: https://material-ui-pickers.dev/
// Calendar for mobile view and as an option for desktop view
// "npm i @material-ui/pickers"

// Use dialog for getting number of orbs between two dates:
// Link https://material-ui.com/components/dialogs/ (go to Form Dialogs for more info)


const dates = [];
for (let k = 1; k <= 31; k++) {
    dates.push("10/"+k);
}

const myTableStyles = makeStyles({
    table: {
        backgroundColor: 'lightgreen',
    },
    tableHead: {
        backgroundColor: 'skyblue',
    },
    tableHeadCell: {
        fontWeight: 'bold',
    },
    tableCell: {
        border: 'solid',
        borderWidth: '1px'
    },
}); 

export default (props) => {
    const [isOrbFormOpen, setOrbFormOpen] = useState(false);
    const tableClasses = myTableStyles();

    const handleClose = () => {
        setOrbFormOpen(false);
    }

    const handleClickOpen = () => {
        setOrbFormOpen(true);
    }

    return(
        <div>
            <TableContainer>
                <Table className={tableClasses.table} padding="none">
                    <TableHead className={tableClasses.tableHead}>
                        <TableRow>
                            <TableCell className={tableClasses.tableCell}>Event type</TableCell>
                            {dates.map((date,ind) => {
                                return(
                                    <TableCell className={tableClasses.tableCell} align="center" key={ind}>{dates[ind]}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={tableClasses.tableCell}>Story chapter</TableCell>
                            <Tooltip title="" placement="top">
                                <TableCell align="center" className={tableClasses.tableCell}>10</TableCell>
                            </Tooltip>   
                        </TableRow>
                        <TableRow>
                            <TableCell className={tableClasses.tableCell}>Chain Challenges</TableCell>
                            <Tooltip arrow="true" title="Paralogues 51 & 52" placement="top">
                                <TableCell align="center" className={tableClasses.tableCell}>8</TableCell>
                            </Tooltip>  
                        </TableRow>
                        <TableRow>
                            <TableCell className={tableClasses.tableCell}>Quests</TableCell>
                            <Tooltip arrow="true" title={
                                <div>
                                    {'1 - Rival Domains'}<br/>
                                    {'4 - Voting Gauntlet'}
                                </div>
                            } placement="bottom">
                                <TableCell align="center" className={tableClasses.tableCell}>5</TableCell>
                            </Tooltip>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h1>Placeholder for orb calendar</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>10/1</th>
                        <th>10/2</th>
                        <th>10/3</th>
                        <th>10/4</th>
                        <th>10/5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Story Chapter/Paralogue</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Chain Challenges</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Quests</td>
                        <td>2</td>
                        <td>3</td>
                        <td>5</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>TOTALS:</td>
                        <td>2</td>
                        <td>3</td>
                        <td>5</td>
                        <td>2</td>
                        <td>21</td>
                    </tr>
                </tbody>
            </table>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Calculate orbs
            </Button>
            <Dialog
                open={isOrbFormOpen}
                onClose={handleClose}
               
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Calculate orbs between two dates
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter two dates here - placeholder
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Calculate
                    </Button>
                </DialogActions>
            </Dialog>
            <Link to="/edit_orb_calendar">Edit Orb Calendar</Link>
        </div>
    );
}