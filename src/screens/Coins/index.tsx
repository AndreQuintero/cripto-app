import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from 'config/routes-type.config'
import * as S from './style'
import { Button } from '@ui-kitten/components'

type Props = NativeStackScreenProps<RootStackParamList, 'Coins'>

const Coins = ({ navigation }: Props) => {
  return (
    <S.View>
      <Button onPress={() => navigation.navigate('Exchanges')}>Navegar</Button>
    </S.View>
  )
}

export default Coins
