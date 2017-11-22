import React, { Component } from 'react';
import './ak-currency-converter.css';

export class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur1Value: '',
            cur2Value: '',
            resultForInput1: '',
            resultForInput2: ''
        };
        this.precision = 4;
        this.setCur1Value = this.setCur1Value.bind(this);
        this.setCur2Value = this.setCur2Value.bind(this);
        this.calcValueForInput2 = this.calcValueForInput2.bind(this);
        this.calcValueForInput1 = this.calcValueForInput1.bind(this);
        this.eraseField1 = this.eraseField1.bind(this);
        this.eraseField2 = this.eraseField2.bind(this);
    }

    setCur1Value(event) {
        this.setState({cur1Value: event.target.value});
        /* console.log(event.target.value);
        console.log(this.state.cur1Value); */
    }

    setCur2Value(event) {
        this.setState({cur2Value: event.target.value});
        /* console.log(event.target.value);
        console.log(this.state.cur2Value); */
    }

    calcValueForInput2(event) {
        /* console.log(event.target.value); */
        let res = (event.target.value * this.state.cur1Value / this.state.cur2Value).toFixed(this.precision);
        console.log(res);
        this.setState({resultForInput2: res, resultForInput1: event.target.value});
    }

    calcValueForInput1(event) {
        /* console.log(event.target.value); */
        let res = (event.target.value * this.state.cur2Value / this.state.cur1Value).toFixed(this.precision);
        this.setState({resultForInput1: res, resultForInput2: event.target.value});
    }

    eraseField1() {
       // this.setState({resultForInput1: ''});
    }

    eraseField2() {
       // this.setState({resultForInput2: ''});
    }

    render() {
        return (
            <div className="ak-converter">
                <div className="ak-converter__title">Currency converter</div>
                    <div className="ak-converter__item">
                        <div className="ak-converter__cur1">Currency 1</div>
                        <input className="ak-converter__input-amount" type="text" size="7"
                            value={this.state.resultForInput1}
                            onChange={this.calcValueForInput2}
                            onFocus={this.eraseField1}
                        />
                        <select className="ak-converter__input-cur"
                            value={this.state.cur1Value}
                            onChange={this.setCur1Value}>
                            <option></option>
                            {this.props.items.map((item) => {
                                return (
                                    <option
                                        key={item.Cur_OfficialRate}
                                        value={item.Cur_OfficialRate/item.Cur_Scale}>
                                        {item.Cur_Abbr}
                                    </option>
                                );
                                })
                            }

                        </select>
                    </div>
                    <div className="">{this.state.warning1}</div>
                    <div className="ak-converter__item">
                        <div className="ak-converter__cur2">Currency 2</div>
                        <input className="ak-converter__input-amount" type="text" size="7"
                            value={this.state.resultForInput2}
                            onChange={this.calcValueForInput1}
                            onFocus={this.eraseField2}
                        />
                        <select className="ak-converter__input-cur"
                            value={this.state.cur2Value}
                            onChange={this.setCur2Value}>
                            <option></option>
                            {this.props.items.map((item) => {
                                return (
                                    <option
                                        key={item.Cur_OfficialRate}
                                        value={item.Cur_OfficialRate/item.Cur_Scale}>
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