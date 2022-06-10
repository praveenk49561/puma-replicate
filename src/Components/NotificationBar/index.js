import React from 'react';

const NotificationBar = (props) => {
    const { content } = props
    return <React.Fragment>
        <div className="notification-bar-main-container">
            <div className="notification-bar-content">{content}</div>
        </div>
    </React.Fragment>
};

export default NotificationBar;