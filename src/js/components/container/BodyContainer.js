/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: BodyContainer.js
* Desc: This file assembles all other components into a page to be displayed.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Paper from '@material-ui/core/Paper';
import TableContainer from './TableContainer';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Bar from './Bar';

class BodyContainer extends Component {
    constructor() {
        super();
    }

    handleClick(e){
        const window = window.open('http://cloudfunctionscloudstorage.appspot.com/', '_blank');
        window.focus();
    }

    render() {
        return (
            <div>
            <Paper>
                 <Bar/>
                <TableContainer/>
            </Paper>
                <Button variant="fab" color="secondary" aria-label="Add" onClick={this.handleClick.bind(this)}>
                    <AddIcon />
                </Button>
            </div>
        );
    }
}
export default BodyContainer;
const wrapper = document.getElementById("create-body");
wrapper ? ReactDOM.render(<BodyContainer />, wrapper) : false;