import React , {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss'
import '../src/style/index.scss'
import HeaderContainer from './components/header/container/index';
import SideBar from './components/sideBar/index';
// import ProfileContainer from './components/content/profile/container/index';
// import Dialog from './components/content/dialogs';
// import Login from './components/login';
import UsersContainer from './components/content/users/container/index';
import HomePage from './components/home/index';
import { initializedTC } from './redux/reducers/app-reducer';
import Preloader from './common/preloader';

import withSuspense from './hoc/withSusense';
const ProfileContainer = React.lazy(() => import('./components/content/profile/container/index'));
const Dialog = React.lazy(() => import('./components/content/dialogs/index'));
const Login = React.lazy(() => import('./components/login'));

const App = () => {
  const initialized = useSelector((state) => state.app.initialized)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initializedTC())
  },[])
  
  if(!initialized){
    return <Preloader/>
  }
  return (
    <div className="App">
      <HeaderContainer/>
      <div className='App-wrapper'>
        <div className='App-content'>
          <SideBar/>
        </div>
        <div className='App-content'>
            <Route exact path='/'  render={()=> <HomePage/>}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer) }/>
            <Route path='/dialogs' render={withSuspense(Dialog)}/>
            <Route path='/users' render={()=>  <UsersContainer/>}/>
            <Route path='/login' render={withSuspense(Login)}/>
          </div> 
      </div>
    </div>
  );
}

export default App;
