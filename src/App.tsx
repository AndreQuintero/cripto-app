import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native'

import { registerRootComponent } from 'expo'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Routes from 'components/Routes'

function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#301934' }}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <StatusBar style="light" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ApplicationProvider>
  )
}

export default registerRootComponent(App)
