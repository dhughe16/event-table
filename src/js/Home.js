import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateEvent from "./components/CreateEvent";
import UploadVideo from "./components/UploadVideo";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReactDOM from "react-dom";

const styles = {
    root: {
        width: 500,
    },
};


class Home extends Component {
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
const wrapper = document.getElementById("create-home");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;