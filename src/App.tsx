import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text as TextKitten } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinScreen from 'screens/Coins'
import ExchangesScreen from 'screens/Exchanges'
import { RootStackParamList } from 'config/routes-type.config';
import { registerRootComponent } from 'expo';

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>

       <NavigationContainer>
         <Stack.Navigator screenOptions={{animation: 'slide_from_right', headerShown: false}}  initialRouteName="Coins">
           <Stack.Screen name="Coins">
             {props => <CoinScreen {...props} />}
           </Stack.Screen>
           <Stack.Screen name="Exchanges" >
             {props => <ExchangesScreen {...props} />}
           </Stack.Screen>
         </Stack.Navigator>
       </NavigationContainer>
        <StatusBar style="auto" />
    </ApplicationProvider>
  );
}

export default registerRootComponent(App)
