import React from 'react';
import './ak-sidebar.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.selectCurrency = this.selectCurrency.bind(this);
    }

    selectCurrency(event) {
        let id = +event.currentTarget.id;
        let title = event.currentTarget.title;
        let rate = event.currentTarget.getAttribute('data-rate');
        let scale = +event.currentTarget.getAttribute('data-scale');
        this.props.sidebarCallback(id, title, rate, scale);
        //console.log(this.props.selectedCur);
    }

    render() {
        let myArrayOfCur = this.props.selectedCur;
        let myFilt = this.props.FILT;
        // console.log(myFilt);
        // console.log(this.props.searchString);

        return (
            <div className='ak-currency-list'>
                {myArrayOfCur
                    .filter((item) => {
                        return item.Cur_Abbr.toUpperCase().indexOf(myFilt.toUpperCase()) !== -1;
                    })
                    .map((item) => {
                        return (
                            <div className="ak-currency-list__container" key={item.Cur_ID}
                                id={item.Cur_ID}
                                title={item.Cur_Abbr}
                                data-rate={item.Cur_OfficialRate}
                                data-scale={item.Cur_Scale}
                                onClick={this.selectCurrency}>
                                <div className="ak-currency-list__name">{item.Cur_Name}</div>
                                <div className="ak-currency-list__rate">{item.Cur_OfficialRate}</div>
                                <div className={item.Cur_Change >= 0 ?
                                    'ak-currency-list__change ak-currency-list__change_increase' :
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