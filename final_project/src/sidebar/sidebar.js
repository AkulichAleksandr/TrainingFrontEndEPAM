import React, { Component } from 'react';
import './sidebar.css';

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.selectCurrency = this.selectCurrency.bind(this);
    }

    selectCurrency(event) {
        this.props.sidebarCallback(event.currentTarget.id);
    }

    render() {
        let myArrayOfCur = this.props.selectedCur;
        return (
            <div className='ak-currency-list'>
                {myArrayOfCur.map((item) => {
                    return (
                        <div className="ak-currency-list__container" key={item.Cur_ID} id={item.Cur_ID} name = {item.Abbr}
                        onClick={this.selectCurrency}>
                            <div className="ak-currency-list__name">{item.Cur_Name}</div>
                            <div className="ak-currency-list__rate">{item.Cur_OfficialRate}</div>
                            <div className={item.Cur_Change >= 0 ?
                                'ak-currency-list__change ak-currency-list__change_increase':
                                'ak-currency-list__change ak-currency-list__change_decrease'}>
                                {item.Cur_Change >= 0 ? `+${item.Cur_Change}` : item.Cur_Change}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}