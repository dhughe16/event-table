import React, { Component } from "react";
import ReactDOM from "react-dom";
import Row from "../presentational/Row";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import getEvents from '../../../../';

class TableContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "sample",
            date: "sample",
            location: "sample"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    // Trying to list events this way, but I don't know if it'll
    // work
    listEvents() {
        const datastore = new Datastore({});
        const query = datastore.createQuery('Event').order('created');

        datastore
            .runQuery(query)
            .then(results => {
                const tasks = results[0];

                console.log('Events:');
                tasks.forEach(task => {
                    const taskKey = task[datastore.KEY];
                    console.log(taskKey.id, task);
                });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    deleteTask(taskId) {
        const taskKey = datastore.key(['Task', taskId]);

        datastore
            .delete(taskKey)
            .then(() => {
                console.log(`Task ${taskId} deleted successfully.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    render() {
        const { title } = this.state;
        const { date } = this.state;
        const { location } = this.state;
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
                        <Row date={title} location={location} title={title}/>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
export default TableContainer;
const wrapper = document.getElementById("create-event-table");
wrapper ? ReactDOM.render(<TableContainer />, wrapper) : false;