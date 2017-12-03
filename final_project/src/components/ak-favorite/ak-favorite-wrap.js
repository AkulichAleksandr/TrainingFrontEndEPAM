import { connect } from 'react-redux';

import { Favorite } from './ak-favorite';

//action
import { removeCurFromFavorite } from './../../store/actions';
import { favoriteCurMovement } from './../../store/actions';
import { favoriteCurInfo } from './../../store/actions';
import { removeCurInfoFromFavorite } from './../../store/actions';
import { removeCurMovementFromFavorite } from './../../store/actions';

const mapStateToProps = (state) => {
    const favoriteCurList = state.favoriteCurList;
    const monthArrayOfCurRate = state.curMovement;
    const favorCurMov = state.showfavoriteCurMovement;
    const generalCurInfo = state.favoriteCurInfo;
    return { favoriteCurList, monthArrayOfCurRate, favorCurMov, generalCurInfo };
};

const mapDispatchToProps = (dispatch) => ({
    removeCurFromFavorite: (param) => dispatch(removeCurFromFavorite(param)),
    favoriteCurMovement: (param) => dispatch(favoriteCurMovement(param)),
    favoriteCurInfo: (param) => dispatch(favoriteCurInfo(param)),
    removeCurInfoFromFavorite: (param) => dispatch(removeCurInfoFromFavorite(param)),
    removeCurMovementFromFavorite: (param) => dispatch(removeCurMovementFromFavorite(param))
});

export const ConnectedFavorite = connect(mapStateToProps, mapDispatchToProps)(Favorite);