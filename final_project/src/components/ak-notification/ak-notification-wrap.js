import { connect } from 'react-redux';

import { Notification } from './ak-notification';


const mapStateToProps = (state) => {
    const notificationCounter = state.favoriteCurList.length;
    return { notificationCounter };
};
export const ConnectedNotification = connect( mapStateToProps )(Notification);