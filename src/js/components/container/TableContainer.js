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
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton/IconButton";

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

    allEvents() {
        this.state.events.map( event =>
            event.Location.latitude, event.Location.longitude
    )
    }

    deleteEvent(e, key) {

        axios.post({
            method: 'post',
            url: '/delete',
            data: {
                key: key
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    testMessage(e)
    {
        console.log("Button confirmed");
    }

    reverseGeo(lat,lng) {
        let latlng = lat.toString() + ',' + lng.toString();
        let key = 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=' + key;
        var addr = '';
        axios({
            method: 'get',
            url: url,
            timeout: 5000 })
            .then(res => {
                console.log(res.data.results[0].formatted_address);
                addr = res.data.results[0].formatted_address;
                return addr;
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    render() {
        return (
            <Paper>
                <Table id={"event-table"}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Event Title</TableCell>
                        <TableCell location>Location</TableCell>
                        <TableCell date>Date</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {this.state.events.map(event => (
                          <Row title={event.Title} date={event.Date} location={event.Location} key={event.Key}/>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;