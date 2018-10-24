import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ReactDOM from "react-dom";
import TableContainer from "./TableContainer";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function App(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
const wrapper = document.getElementById("create-bar");
wrapper ? ReactDOM.render(<Bar />, wrapper) : false;