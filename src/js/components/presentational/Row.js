import React from "react";
import PropTypes from "prop-types";

const Row = ({ title, location, date }) => (
    <div className="table-row">
        <tr>
            <td>{this.title}</td>
            <td>{this.location}</td>
            <td>{this.date}</td>
        </tr>
    </div>
);
Row.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};
export default Row;