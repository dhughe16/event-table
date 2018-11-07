/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: Row.js
* Desc: This file contains all the elements to build a single Row
*       component.
 */

import React from "react";
import PropTypes from "prop-types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import deleteEvent from '../container/deleteEvent'

const Row = ({ title, location, date, key }) => (
        <TableRow id={"table-row"}>
            <TableCell>{title}</TableCell>
            <TableCell>{JSON.stringify(location)}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell >
                <IconButton onClick={deleteEvent(key)}><DeleteIcon/></IconButton>
            </TableCell>
        </TableRow>
);

Row.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    key: PropTypes.object.isRequired
};

export default Row;