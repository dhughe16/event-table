import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "../presentational/Row";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TableContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { row } = this.state;
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
                        <TableRow>
                            <TableCell>title={'some'}</TableCell>
                            <TableCell date>date={'some'}</TableCell>
                            <TableCell location>location={'some'}</TableCell>
                        </TableRow>
                </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;