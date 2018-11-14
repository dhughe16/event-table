import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateEvent from "./CreateEvent";
import UploadVideo from "./UploadVideo";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        width: 500,
    },
};


class Main extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <HashRouter>
                <div>
                    <Paper>
                        <ul className="header">
                            <li><NavLink exact to="/">Dashboard</NavLink></li>
                            <li><NavLink to="/create-event">Create Event</NavLink></li>
                            <li><NavLink to="/upload-video">Upload Video</NavLink></li>
                        </ul>
                    </Paper>
                    <div className="content">
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/create-event" component={CreateEvent}/>
                        <Route path="/upload-video" component={UploadVideo}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);