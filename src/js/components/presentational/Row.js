import React from "react";
import PropTypes from "prop-types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Row = ({ title, location, date }) => (
        <TableRow id={"table-row"}>
            <TableCell>{title}</TableCell>
            <TableCell>{location}</TableCell>
            <TableCell>{date}</TableCell>
        </TableRow>
);

Row.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Row;