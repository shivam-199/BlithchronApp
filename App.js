import React, {Component} from 'react';
import {LogBox} from 'react-native';

import AppHomePage from './src/features/home/screens/AppHomePage';

LogBox.ignoreLogs(['Reanimated 2']);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppHomePage />;
  }
}

export default App;
