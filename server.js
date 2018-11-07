/*
* Name: Darcy Hughes
* Group: CSE 486 Capstone GoDaddy
* File: server.js
* Desc: This file creates a number of functions that can
*       be used to access data from Google Datastore
*       and interact with other Google products.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
require('@babel/register')({
    presets: ['react']
});

// Google Cloud Platform project ID
const projectId = 'event-table';

// Google Cloud Datastore Client
const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({
    projectId: projectId,
});

// Express
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

/**
* listEvents
*  @param req, unused
*  @return a JSON object with events from Google Datastore
 *  Lists the 10 most recent events in Google Datastore.
 */
app.get('/listEvents', function (req, res) {
    const query = datastore.createQuery('Event').limit(10).order('Date', {
        descending: true,
    });
    let eventList = [];

    datastore
        .runQuery(query)
        .then(results => {
            const events = results[0];
            events.forEach(event => {
                const date = new Date(event.Date);

                eventList.push({
                    Title: event.Title,
                    Location: event.Location,
                    Date: date.toLocaleDateString("en-US"),
                    Key: event[datastore.KEY].path[1]
                });
            });
            //let list = eventsToAddr(eventList);
            //console.log(list);
            res.send(eventList);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});

/**
* delete
*  @param req, a JSON object with the key of the item to be
 *          deleted.
*  @return a string confirming the event was deleted
 *  Desc: Deletes an event from Google Datastore
 */
app.post('/delete', function (req, res) {
    console.log(req.data.key);
    const taskKey = datastore.key(['Event', req.data.key]);

        datastore
            .delete(taskKey)
            .then(() => {
                console.log(`Event ${req} deleted successfully.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });

    res.send('Event deleted')
});

// Google Cloud Datastore GET request handler

/*app.get('/sendStore', (req, res) => {
    // The kind for the new entity
    const kind = 'Event-Item';
    // The name/ID for the new entity
    const name = 'Product Demonstration';
    // The Cloud Datastore key for the new entity
    const entityKey = datastore.key([kind, name]);

    // Prepares the new entity
    const entity = {
        key: entityKey,
        data: {
            description: 'Event description.',
            latitude: 33.4255,
            longitude: -111.9400,
        },
    };

    // Saves the entity
    datastore
        .save(entity)
        .then(() => {
            console.log(`Saved ${entity.key.name}: ${entity.data.description}`);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
})*/

/**
* eventsToAddr
*  @param events, a JSON object of events
*  @return JSON object with updated events
 *  Iterates through events list, re-formatting locations
 *  to addresses.
 */
function eventsToAddr(events){

    for (var event in events){
        (async () => {
            event.Location = await reverseGeo(event.Location);
        })();
    }

    return events;
}

/**
* reverseGeo
*  @param req, A JSON object including the longitude and latitude of
 *      a location.
*  @return a string containing the formatted address that corresponds with
 *  the longitude and latitude.
 *  Desc: Converts a longitude latitude pair to a formatted address
 *  using Google Maps Reverse Geocoding
 */
async function reverseGeo(req) {
    try {
        let latlng = req.latitude.toString() + ',' + req.longitude.toString();
        let key = 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=' + key;
        var addr = '';
        axios({
            method: 'get',
            url: url,
            timeout: 5000
        })
            .then(res => {
                //console.log(res.data.results[0].formatted_address);
                addr = res.data.results[0].formatted_address;
                return addr;
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    } catch(error) {
        console.log(error.message);
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});