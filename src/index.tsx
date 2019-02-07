// import { observer } from 'mobx-react/native';
import React from 'react';
import { Provider } from 'mobx-react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import appStore from './stores/appStore';
import { ratio } from './utils/Styles';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Intro, NotFound } from './screens';
class App extends React.Component {
  public render() {
    return (
      <Provider store={appStore}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={Intro} />
            <Scene key="home" component={NotFound} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  }
});

export default App;
