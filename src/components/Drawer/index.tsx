import React from 'react'
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten/components'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

const DrawerContent = ({ navigation, state }: DrawerContentComponentProps) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
  >
    <DrawerItem title="Coins" />
    <DrawerItem title="Exchanges" />
  </Drawer>
)

export default DrawerContent
