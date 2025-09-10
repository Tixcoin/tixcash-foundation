import React, { useState, useEffect } from 'react';
import Connector from './FeedIndex';


function SiglarRData() {
    const { ifevents } = Connector();
    const [message, setMessage] = useState("initial value");
    useEffect(() => {
        ifevents((_, message) => setMessage(message));
    });
    return (
        <div className="App">
            <span>message from signalR: <span style={{ color: "green" }}>{message}</span> </span>   
        </div>
    );
}
export default SiglarRData;
