import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TronWeb from 'tronweb';
function WalletConnect(props) {
    
    const [tronWeb, setTronWeb] = useState(new TronWeb({
        fullHost: 'https://api.trongrid.io',
    }));
    return <div>{}</div>;
}

const connectTronLink = async () => {
    try {
        await tronWeb.setTronWeb(window.tronWeb);
        // TronLink is connected successfully
        console.log('Connected to TronLink!');
    } catch (error) {
        // TronLink connection failed
        console.error('Failed to connect to TronLink:', error);
    }
};

function GetTimeAgo(unixseconds) {
    try {
        if (!unixseconds) return `-----`;
        //return `abc`;
        const recDate = localStorage.getItem("timeFormat") == 'LOCAL' ? moment(new Date(unixseconds)) : moment(new Date(unixseconds)).utc();
        const localDate = localStorage.getItem("timeFormat") == 'LOCAL' ? moment(new Date()) : moment(new Date()).utc();

        const timeDifference = localDate - recDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = localDate.month() - recDate.month();
        const years = localDate.year() - recDate.year();

      
        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (weeks > 0) {
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (seconds > 0) {
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        } else {
            return `${unixseconds} UnixSecond${unixseconds > 1 ? 's' : ''} ago`;
        }
    } catch (e) {
        return `-----`;
    }
}

export default WalletConnect;
  