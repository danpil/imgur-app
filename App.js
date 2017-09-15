import React from 'react';
import ImgurApp from './src/ImgurApp';
import { AppRegistry } from 'react-native';

class App extends React.Component {
  render() {
    return <ImgurApp />;
  }
}

AppRegistry.registerComponent('ImgurApp', () => App);
export default App;
