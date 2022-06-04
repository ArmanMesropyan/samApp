import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss'
import '../src/style/index.scss'
import HeaderContainer from './components/header/container/index';
import SideBar from './components/sideBar/index';
import ProfileContainer from './components/content/profile/container/index';
import Dialog from './components/content/dialogs';
import UsersContainer from './components/content/users/container/index';
import Login from './components/login';
import HomePage from './components/home/index';
const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <div className='App-wrapper'>
        <div className='App-content'>
          <SideBar/>
        </div>
        <div className='App-content'>
            <Route exact path='/'  render={()=> <HomePage/>}/>
            <Route path='/profile/:userId?' render={()=> <ProfileContainer/>}/>
            <Route path='/dialogs' render={()=> <Dialog/>}/>
            <Route path='/users' render={()=>  <UsersContainer/>}/>
            <Route path='/login' render={()=><Login/>}/>
          </div> 
      </div>
    </div>
  );
}

export default App;
