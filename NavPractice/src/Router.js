import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Settings from './components/Settings';
import CreateAccount from './components/CreateAccount';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Home} title="Money Mapper" />
        <Scene key="signup" component={CreateAccount} title="Sign Up" />
      </Scene>
      <Scene key="main">
        <Scene key="settings" component={Settings} title="Settings" />
        {/* <Scene key="signup" component={CreateAccount} title="Sign Up" /> */}
      </Scene>
    </Router>
  );
};

export default RouterComponent;
