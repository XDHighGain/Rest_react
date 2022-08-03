/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
//import type { Node } from 'react';
import {
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';


import { MainPageComponent } from './Components/Pages/MainPage/MainPage';
import { UniverPageComponent } from './Components/Pages/UniversPage';
import { PicturePageComponent } from './Components/Pages/PicturePage/PicturePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  const Mai = () => {
    return (
      <Button title='dddd'>
        <Text>dddd</Text>
      </Button>
    );
  }


  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name={'MainPageComponent'}
          component={MainPageComponent}
        />
        <Stack.Screen
          name={'UniverPageComponent'}
          component={UniverPageComponent}
        />
        <Stack.Screen
          name={'PicturePageComponent'}
          component={PicturePageComponent}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;
