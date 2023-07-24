import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import StackNavigator from './navigation/stackNavigation/StackNavigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StackNavigator />
    </PaperProvider>
  );
};

export default App;
