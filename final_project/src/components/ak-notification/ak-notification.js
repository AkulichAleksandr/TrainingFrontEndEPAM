import React from 'react';
import './ak-notification.css';

export class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="ak-notification">
                {this.props.notificationCounter === 0? '': this.props.notificationCounter <= 9? this.props.notificationCounter: '9+'}
            </span>
        );
    }
}