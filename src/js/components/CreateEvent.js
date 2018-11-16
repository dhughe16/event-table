import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';
import DayPicker from 'react-day-picker';
//import 'react-day-picker/lib/style.css';
import { MapComponent } from './MapComponent';
import Paper from '@material-ui/core/Paper';
//import axios from 'axios';
//const localstorage_key = 'savedJson';


class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.eventSubmit = this.eventSubmit.bind(this);
        this.state = {
            name: "Event Name",
            desc: "Description of the event.",
            isGoing: true,
            address: "699 S Mill Ave, Tempe, AZ 85281",
            lat: 33.4255,
            lon: -111.94,
            selectedDay: null,
            time: "12:00",
            YouTubeURL: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
            userJson: {},
        };
    }

    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log("INPUT CHANGED");
    }


    eventSubmit() {
        console.log(this.state);
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <Paper>
            <form>
                <div id="name-desc">
                    <h3>Get Started</h3>
                    <label>
                        Event name:
                        <input type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea rows="5" value={this.state.desc} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                    </label>
                </div>
                <hr/>
                <div id="maps">
                    <h3>Choose Location</h3>

                    <Collapsible trigger="Maps">
                        <MapComponent id="map"/>
                        <label>
                            Address:
                            <input
                                name="address"
                                type="text"
                                value={this.state.address}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Latitude:
                            <input
                                name="lat"
                                type="number"
                                value={this.state.lat}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Longitude:
                            <input
                                name="lon"
                                type="number"
                                value={this.state.lon}
                                onChange={this.handleInputChange} />
                        </label>
                    </Collapsible>
                </div>

                <hr/>

                <div id="datetime">
                    <h3>Scheduling</h3>
                    <div>
                        <DayPicker
                            selectedDays={this.state.selectedDay}
                            onDayClick={this.handleDayClick} />
                        <p>
                            {this.state.selectedDay
                                ? this.state.selectedDay.toLocaleDateString()
                                : 'Please select a day '}
                        </p>
                    </div>
                    <br />
                    <label>
                        Time:
                        <input
                            name="time"
                            type="time"
                            value={this.state.time}
                            onChange={this.handleInputChange} />
                    </label>
                </div>
                <hr/>
                <div id="eventSubmit">
                    <h3>Submit Event</h3>
                    <button
                        id="eventSubmit"
                        type="button"
                        style={{ padding: 5, marginLeft: 10 }}
                        onClick={this.eventSubmit.bind(this)}>
                        JSON Stringify
                    </button>
                </div>
            </form>
            </Paper>
        );
    }
}

export default CreateEvent;