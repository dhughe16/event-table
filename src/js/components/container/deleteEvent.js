import React from "react";
import axios from "axios";

function deleteEvent(key) {

    axios.post({
        method: 'post',
        url: '/delete',
        data: {
            key: key
        }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}
export default deleteEvent;