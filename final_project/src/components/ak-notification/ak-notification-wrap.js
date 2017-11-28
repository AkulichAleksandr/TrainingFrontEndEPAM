import { connect } from 'react-redux';

import { Notification } from './ak-notification';


const mapStateToProps = (state) => {
    const notificationCounter = state.favoriteCurList.length <= 9 ? state.favoriteCurList.length: '9+';
    return { notificationCounter };
};
export const ConnectedNotification = connect( mapStateToProps )(Notification);