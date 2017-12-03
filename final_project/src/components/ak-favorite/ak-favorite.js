import React from 'react';
import './ak-favorite.css';

import './../../../node_modules/font-awesome/css/font-awesome.css';
import {Graph} from './../ak-graph';

export class Favorite extends React.Component {
    constructor(props) {
        super(props);

        this.removeFromFavorite = this.removeFromFavorite.bind(this);
        this.selectFavoriteCurrency = this.selectFavoriteCurrency.bind(this);
    }

    removeFromFavorite(event) {
        let id = +event.currentTarget.id;
        this.props.removeCurFromFavorite(id);
        this.props.removeCurInfoFromFavorite();
        this.props.removeCurMovementFromFavorite();
        event.stopPropagation();
    }

    selectFavoriteCurrency(event) {
        let id = event.currentTarget.id;
        this.props.favoriteCurMovement(id);
        this.props.favoriteCurInfo(id);
    }

    render() {
        return (
            <div className="ak-favorite">
                <div className="ak-favorite__container">
                    <div className="ak-favorite__label">
                        {this.props.favoriteCurList
                            .map((item) => {
                                return (
                                    <div className="ak-favorite__label-item" key={item.Cur_ID} tabIndex="0"
                                        id={item.Cur_ID}
                                        title={item.Cur_Abbr}
                                        onClick={this.selectFavoriteCurrency}>
                                        <div className="ak-favorite__abbr">{item.Cur_Abbr}</div>
                                        <i className="fa fa-times-circle-o ak-favorite__cross"
                                            id={item.Cur_ID}
                                            aria-hidden="true"
                                            onClick={this.removeFromFavorite}>
                                        </i>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="ak-favorite__info">
                            <p>Currency Name: {this.props.generalCurInfo.Cur_Name_Eng}</p>
                            <p>Currency Abbreviation: {this.props.generalCurInfo.Cur_Abbreviation}</p>
                            <p>Start Date: {this.props.generalCurInfo.Cur_DateStart}</p>
                            <p>End Date: {this.props.generalCurInfo.Cur_DateEnd}</p>
                    </div>
                    <div className="ak-favorite__graph">
                        <Graph monthArrayOfCurRate={this.props.favorCurMov}/>
                    </div>
                </div>
            </div>
        );
    }
}