import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from 'components/Drawer'
import { RootDrawerParamList } from 'config/routes-type.config'
import React from 'react'
import Exchanges from 'screens/Exchanges'
import CoinRoutes from './Coins'

const Routes = () => {
  const Drawer = createDrawerNavigator<RootDrawerParamList>()
  return (
    <Drawer.Navigator
      initialRouteName="Coins"
      screenOptions={{
        headerShown: false
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Coins" children={CoinRoutes} />
      <Drawer.Screen name="Exchanges">
        {(props) => <Exchanges {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default Routes
