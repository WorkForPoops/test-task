import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return{
        profile: state.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Profile);