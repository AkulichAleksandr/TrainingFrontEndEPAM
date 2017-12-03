import React from 'react';
import './ak-converter.css';
import { Graph } from './../ak-graph';

import { ConverterInput } from './../ak-converter-input';

export class Converter extends React.Component {
    constructor(props) {
        super(props);

        this.setInputValue = this.setInputValue.bind(this);
        this.setSelectValue = this.setSelectValue.bind(this);
    }

    setInputValue(value) {
        this.props.setDestinationValue(value);
    }

    setSelectValue(id) {
        this.props.setDestinationCurInfo(id);
    }

    render() {
        return (
            <div className="ak-converter">
                <div className="ak-converter__container">
                    <ConverterInput text={'Value'} disabled={true}
                        items={this.props.selectedCur}
                        inputCallback={this.setInputValue}
                        //1) pass value for selected value
                        value={this.props.selectedCur[0].Cur_ID}
                    />
                    <ConverterInput text={'Destination'} readOnly={true}
                        items={this.props.initialArrayOfCur}
                        selectCallback={this.setSelectValue}
                        destinationValue={this.props.destinationValue}
                    />
                </div>
                <div className="ak-converter__graph">
                    <Graph monthArrayOfCurRate={this.props.monthArrayOfCurRate} />
                </div>
            </div>
        );
    }
}