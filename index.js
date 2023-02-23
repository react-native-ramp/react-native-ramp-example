/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {RampMenuHOC, RampSDK} from 'react-native-ramp';

import App from './App';
import {name as appName} from './app.json';

RampSDK.initAutomaticUpdate({
  updateCheckMode: 'ON_FOREGROUND',
  updateCheckInterval: 'ALWAYS',
  updateMode: 'ON_FOREGROUND',
});

function AppWithRampMenu() {
  return (
    <RampMenuHOC>
      <App />
    </RampMenuHOC>
  );
}

AppRegistry.registerComponent(appName, AppWithRampMenu);
