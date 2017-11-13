import React, { Component } from 'react';
import './currencytable.css';

export class CurrencyTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ak-currency-table__container">
                <table className="ak-currency-table__tab">
                    <thead>
                        <tr>
                            <th className="ak-currency-table__title">Date</th>
                            <th className="ak-currency-table__title">Currency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item, index) => {
                            return (
                                <tr key={item.Date}>
                                    <td className="ak-currency-table__date">{item.Date.slice(0,10)}</td>
                                    <td className="ak-currency-table__rate">{item.Cur_OfficialRate.toFixed(4)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}