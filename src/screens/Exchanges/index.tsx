import { DrawerScreenProps } from '@react-navigation/drawer'
import { Button } from '@ui-kitten/components'
import React from 'react'
import { RootStackParamList } from 'config/routes-type.config'
import * as S from './style'

type Props = DrawerScreenProps<RootStackParamList, 'Exchanges'>

const Exchanges = ({ navigation }: Props) => {
  return (
    <S.View>
      <S.Text>Exchanges</S.Text>
      <Button onPress={() => navigation.navigate('Coins')}>Navegar</Button>
    </S.View>
  )
}

export default Exchanges
