import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import styled from 'styled-components/native'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
      <LayoutStyled>
        <Button>HOME</Button>
        <StatusBar style="auto" />
      </LayoutStyled>
    </ApplicationProvider>
  );
}

const LayoutStyled = styled(Layout)`
    flex: 1;
    justifyContent: center; 
    alignItems: center 
`