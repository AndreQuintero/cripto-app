import React from 'react'
import { CoinModuleParamList } from 'config/routes-type.config'
import * as S from './style'
import { Button } from '@ui-kitten/components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<CoinModuleParamList, 'CriptoCoins'>

const Coins = ({ navigation }: Props) => {
  return (
    <S.View>
      <S.Text>Coins</S.Text>
      <Button onPress={() => navigation.navigate('CoinDetail')}>Navegar</Button>
    </S.View>
  )
}

export default Coins
