import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import { AuthProvider } from './sources/Provider';

export default function Main() {
    return (
      <AuthProvider>
        <App />
      </AuthProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
