/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: deleteEvent.js
* Desc: This file contains a method to delete events.
 */

import React from "react";
import axios from "axios";

function deleteEvent(id) {
    console.log("ID " + id);
    axios.post('/delete', {id})
        .then(res => {
            console.log(res.data);
            //this.componentDidMount();
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
export default deleteEvent;