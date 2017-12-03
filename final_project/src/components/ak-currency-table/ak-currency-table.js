import React from 'react';
import './ak-currency-table.css';

export class CurrencyTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ak-currency-table">
                <div className="ak-currency-table__container">
                    <table className="ak-currency-table__tab">
                        <thead>
                            <tr>
                                <th className="ak-currency-table__title">Date</th>
                                <th className="ak-currency-table__title">{this.props.curTitle? this.props.curTitle: 'Currency'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, index) => {
                                return (
                                    <tr key={item.Date}>
                                        <td className="ak-currency-table__date">
                                            {item.Date}
                                        </td>
                                        <td className="ak-currency-table__rate">{item.Cur_OfficialRate}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}