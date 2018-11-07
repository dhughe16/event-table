/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: TableContainer.js
* Desc: This file contains all elements to build and populate
*       the event table.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "../presentational/Row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import RowContainer from './RowContainer';
import axios from 'axios';

class TableContainer extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
    }

    // Lists events
    componentDidMount() {
        axios({
            method: 'get',
            url: '/listEvents',
            timeout: 5000 })
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    // Deletes an event with the given key
    deleteEvent(id) {
        axios.post('/delete', {id})
            .then(res => {
                console.log(res.data);
                this.componentDidMount();
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    // Test
    testMessage(e)
    {
        console.log("Button confirmed");
    }

    render() {
        return (
                <Table id={"event-table"}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Event Title</TableCell>
                        <TableCell location>Location</TableCell>
                        <TableCell date>Date</TableCell>
                        <TableCell ><Button onClick={()=>{this.deleteEvent('5631986051842048')}}>Test</Button></TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {this.state.events.map(event => (
                          <Row title={event.Title}
                               date={event.Date}
                               location={event.Location}
                               key={event.Id}/>
                    ))}
                    </TableBody>
                </Table>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;