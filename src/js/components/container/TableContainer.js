import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "../presentational/Row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class TableContainer extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
    }

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

    render() {
        const { title }  = "sample";
        const { date } = "sample";
        const { location } = "sample";
        return (
            <Paper>
                <Table id={"event-table"}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Event Title</TableCell>
                        <TableCell location>Location</TableCell>
                        <TableCell date>Date</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        { this.state.events.map(event => <Row date={event.Date} location={location} title = {event.Title}/>)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;