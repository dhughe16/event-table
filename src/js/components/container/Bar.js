/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: Bar.js
* Desc: This file sets up the Dashboard title bar. Referenced from
*       the material-ui demo.
 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Bar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Bar;