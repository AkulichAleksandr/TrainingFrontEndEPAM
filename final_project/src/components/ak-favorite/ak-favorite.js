import React from 'react';
import './ak-favorite.css';

import { connect } from 'react-redux';
import './../../../node_modules/font-awesome/css/font-awesome.css';
import {CurrencyTable} from './../ak-currency-table';

//action
import { removeCurFromFavorite } from './../../store/actions';

class Favorite extends React.Component {
    constructor(props) {
        super(props);

        this.removeFromFavorite = this.removeFromFavorite.bind(this);
        this.selectFavoriteCurrency = this.selectFavoriteCurrency.bind(this);
    }

    removeFromFavorite(event) {
        let id = +event.currentTarget.id;
        this.props.removeCurFromFavorite(id);
    }

    selectFavoriteCurrency(event) {
        let id = +event.currentTarget.id;
        console.log(id);
    }

    render() {
        return (
            <div className="ak-favorite">
                <div className="ak-favorite__container">
                    <div className="ak-favorite__label">
                        {this.props.favoriteCurList
                            .map((item) => {
                                return (
                                    <div className="ak-favorite__label-item" key={item.Cur_ID}
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
                    <div>
                    <CurrencyTable items={this.props.monthArrayOfCurRate}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const favoriteCurList = state.favoriteCurList;
    const monthArrayOfCurRate = state.curMovement;
    //const savedCurMovement = state.savedCurMovement[0]

    return { favoriteCurList, monthArrayOfCurRate };
};

const mapDispatchToProps = (dispatch) => ({
    removeCurFromFavorite: (param) => dispatch(removeCurFromFavorite(param))
});

export const ConnectedFavorite = connect(mapStateToProps, mapDispatchToProps)(Favorite);