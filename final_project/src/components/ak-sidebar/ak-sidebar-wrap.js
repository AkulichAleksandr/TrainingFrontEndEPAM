import { connect } from 'react-redux';
import { Sidebar } from './ak-sidebar';

//action
import { downloadCurMovement } from './../../store/actions';
import { setSelectedCurInfo } from './../../store/actions';

const mapStateToProps = (state) => {
    const initialArrayOfCur = state.curList;
    const searchString = state.curListFilter;
    const selectedCur = state.selectedCurInfo;
    return { initialArrayOfCur, searchString, selectedCur };
};

const mapDispatchToProps = (dispatch) => ({
    downloadCurMovement: (curId) => dispatch(downloadCurMovement(curId)),
    setSelectedCurInfo: (...param) => dispatch(setSelectedCurInfo(...param))
});

export const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);