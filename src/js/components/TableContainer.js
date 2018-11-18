/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: TableContainer.js
* Desc: This file contains all elements to build and populate
*       the event table.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

class TableContainer extends Component {
    constructor(props) {
        super(props);
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
        console.log(id);
        axios.post('/delete', {id})
            .then(res => {
                console.log(res.data);
                this.componentDidMount();
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
        this.componentDidMount();
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
                        <TableCell/>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {this.state.events.map(event => (
                        <TableRow id={event.Id}>
                            <TableCell>{event.Title}</TableCell>
                            <TableCell>{event.Location}</TableCell>
                            <TableCell>{event.Date}</TableCell>
                            <TableCell >
                                <IconButton onClick={()=>{this.deleteEvent(event.Id)}}><DeleteIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;