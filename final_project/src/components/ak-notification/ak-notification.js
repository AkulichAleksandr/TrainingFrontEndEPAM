import React from 'react';
import './ak-notification.css';

export class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="ak-notification">
                {this.props.notificationCounter? this.props.notificationCounter: ''}
            </span>
        );
    }
}