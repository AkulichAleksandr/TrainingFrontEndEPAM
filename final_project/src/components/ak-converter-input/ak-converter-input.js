import React from 'react';
import './ak-converter-input.css';

export class ConverterInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputOnChange = this.inputOnChange.bind(this);
        this.selectOnChange = this.selectOnChange.bind(this);
    }

    inputOnChange(event) {
        this.props.inputCallback(event.currentTarget.value);
    }

    selectOnChange(event) {
        this.props.selectCallback(event.currentTarget.value);
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
                        />
                        <select className="ak-converter-input__currency"
                            disabled={this.props.disabled}
                            onChange={this.selectOnChange}>
                            <option></option>
                            {this.props.items.map((item) => {
                                return (
                                    <option selected={this.props.selected}
                                        key={item.Cur_OfficialRate}
                                        value={item.Cur_ID}
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