/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: Dashboard* Desc: This file assembles all other components into a page to be displayed.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Paper from '@material-ui/core/Paper';
import TableContainer from './TableContainer';
import Bar from './Bar';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Paper>
                 <Bar/>
                <TableContainer/>
            </Paper>
            </div>
        );
    }
}
export default Dashboard;
const wrapper = document.getElementById("create-body");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;