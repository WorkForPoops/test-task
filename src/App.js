import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'

class App extends React.Component {

  // componentDidMount() {
  //   this.props.initializeApp();
  // }

  

  render() {
    return (
      <div>
        <Route path='/' exact render={ () => <Redirect to={'/profile'}/> }/>
        <Route path='/profile' render={ () => <ProfileContainer /> }/>
        <Route path='/login' render={ () => <Login /> }/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({

})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, ))(App);

const MainApp = (props) => {
  return(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
