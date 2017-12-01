import React from 'react';
import './ak-converter-input.css';

export class ConverterInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputOnChange = this.inputOnChange.bind(this);
        this.selectOnChange = this.selectOnChange.bind(this);
        this.validateInputValue = this.validateInputValue.bind(this);
    }

    inputOnChange(event) {
        console.log(event.currentTarget.value);
        this.props.inputCallback(event.currentTarget.value);
    }

    selectOnChange(event) {
        console.log(event.currentTarget.value);
        this.props.selectCallback(event.currentTarget.value);
    }

    validateInputValue(event) {
        let validateEvent = event;
        let key = validateEvent.keyCode || validateEvent.which;
        key = String.fromCharCode(key);
        let regexp = /[0-9]/;
        if (!regexp.test(key)) {
            validateEvent.preventDefault();
        }
    }

    render() {
        return (
            <div className="ak-converter-input">
                <div className="ak-converter-input__container">
                    <div className="ak-converter-input__title">{this.props.text}</div>
                    <input className="ak-converter-input__amount" type="text" size="7"
                        readOnly={this.props.readOnly}
                        onChange={this.inputOnChange}
                        value={this.props.destinationValue}
                        onKeyPress={this.validateInputValue}
                    />
                    <select className="ak-converter-input__currency"
                        disabled={this.props.disabled}
                        onChange={this.selectOnChange}
                        value={this.props.value} //2) take value from ak-converter
                    >
                        <option></option>
                        {this.props.items.map((item) => {
                            return (
                                <option
                                    key={item.Cur_OfficialRate}
                                    value={item.Cur_ID} //3) set value instead of selected
                                    title={item.Cur_Abbr}>
                                    {item.Cur_Abbr}
                                </option>
                            );
                        })
                        }
                    </select>
                </div>
            </div>
        );
    }
}