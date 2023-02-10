import React, { useState } from "react";
import moment from "moment-timezone";

const App = () => {
    const currentTime = "01:00:00";
    const [timezone, setTimezone] = useState("");
    const formatedTime = moment(currentTime, "HH:mm:ss");
    const time = timezone === "" ? "00:00:00" : moment.tz(formatedTime, timezone).format("HH:mm:ss");

    const handleChange = (event) => {
        setTimezone(event.target.value);
    };

    return (
        <div>
            <h1>Time converter</h1>
            <h2>Current time: {currentTime}</h2>
            <h2>Converted time: {time}</h2>
            <form>
                <label>Convert to:</label>
                <select onChange={handleChange}>
                    <option value="">Select timezone</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                    <option value="America/New_York">New York</option>
                    <option value="Europe/Madrid">Madrid</option>
                    <option value="Africa/Cairo">Cairo</option>
                    <option value="Australia/Sydney">Sydney</option>
                </select>
            </form>
        </div>
    );
};

export default App;
