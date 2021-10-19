import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CoinModuleParamList } from 'config/routes-type.config'
import React from 'react'
import Coins from 'screens/Coins'
import CoinDetail from 'screens/CoinDetail'

const CoinRoutes = () => {
  const Stack = createNativeStackNavigator<CoinModuleParamList>()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
      initialRouteName="CriptoCoins"
    >
      <Stack.Screen name="CriptoCoins">
        {(props) => <Coins {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CoinDetail">
        {(props) => <CoinDetail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default CoinRoutes
