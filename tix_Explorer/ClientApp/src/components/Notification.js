import React from 'react';
 // Add some basic styling

const Notification = ({ message, show }) => {
    return (
        <div className={`notification hidden-mobile container ${show ? 'show' : ''}`}>
            <img src="./assets/img/notification.png" alt="bell" width="20" style={{marginRight:'10px'} } />
            You have {message} new notifications
        </div>
    );
};

export default Notification;