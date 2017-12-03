import React from 'react';
import './ak-currencies.css';

import { Datepicker } from '../ak-datepicker';
import { Graph } from './../ak-graph';

export class Currencies extends React.Component {
    constructor(props) {
        super(props);

        this.dateFromCallback = this.dateFromCallback.bind(this);
        this.dateToCallback = this.dateToCallback.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    dateFromCallback(anyParam) {
        this.props.setStartDate(anyParam);
        this.props.downloadCurMovement();
    }

    dateToCallback(anyParam) {
        this.props.setEndDate(anyParam);
        this.props.downloadCurMovement();
    }

    addToFavorite() {
        this.props.addCurToFavorite();
        this.props.saveCurMovement();
    }

    render() {
        return (
            <div className="ak-currencies">
                <div className="ak-currencies__container">
                    <div className="ak-currencies__button">
                        <input className="ak-button" type="button" value="To favorite" onClick={this.addToFavorite}/>
                    </div>
                    <div className="ak-currencies__datepickers">
                        <div className="ak-currencies__datepickers-item">
                            <Datepicker changeDateCallback={this.dateFromCallback} text={'Date From'} />
                        </div>
                        <div className="ak-currencies__datepickers-item">
                            <Datepicker changeDateCallback={this.dateToCallback} text={'Date To'} />
                        </div>
                    </div>
                    <div className="ak-currencies__graph">
                        <Graph monthArrayOfCurRate={this.props.monthArrayOfCurRate} />
                    </div>
                </div>
            </div>
        );
    }
}