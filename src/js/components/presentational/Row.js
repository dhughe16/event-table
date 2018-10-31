import React from "react";
import PropTypes from "prop-types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Row = ({ title, location, date }) => (
        <TableRow id={"table-row"}>
            <TableCell>{title}</TableCell>
            <TableCell>{JSON.stringify(location)}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell >
                <IconButton><DeleteIcon/></IconButton>
            </TableCell>
        </TableRow>
);

Row.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Row;