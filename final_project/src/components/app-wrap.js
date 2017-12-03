import { connect } from 'react-redux';

import { App } from './app';

import { downloadCurList } from './../store/actions';

const mapStateToProps = (state) => {
    const selectedCurInfo = state.selectedCurInfo[0].Cur_ID;
    return { selectedCurInfo };
};

const mapDispatchToProps = (dispatch) => ({
    downloadCurList: (param) => dispatch(downloadCurList(param))
});

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);