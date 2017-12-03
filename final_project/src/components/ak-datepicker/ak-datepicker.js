import React from 'react';
import './ak-datepicker.css';

export class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.changeDate = this.changeDate.bind(this);
    }

    changeDate(event) {
        this.props.changeDateCallback(event.currentTarget.value);
    }

    render() {
        return (
            <div className="ak-datepicker">
                <div className="ak-datepicker__container">
                    <div className="ak-datepicker__text">{this.props.text}</div>
                    <input className="ak-datepicker__input" type="date"
                        onChange={this.changeDate}
                        min='2016-07-01'
                        max={new Date().toLocaleDateString('en-US', { year: 'numeric' }) + '-' +
                            new Date().toLocaleDateString('en-US', { month: '2-digit' }) + '-' +
                            new Date().toLocaleDateString('en-US', { day: '2-digit' })} />
                </div>
            </div>
        );
    }
}