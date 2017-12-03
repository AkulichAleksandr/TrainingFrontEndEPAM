import { connect } from 'react-redux';
import { Search } from './ak-search';

//action
import { curListFilter } from './../../store/actions';

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList;
    return { initialArrayOfCur };
};

const mapDispatchToProps = (dispatch) => ({
    searchCallback: (param) => dispatch(curListFilter(param))
});

export const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);