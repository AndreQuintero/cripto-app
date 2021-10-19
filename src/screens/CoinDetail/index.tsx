import React from 'react'
import { CoinModuleParamList } from 'config/routes-type.config'
import * as S from './style'
import { Button } from '@ui-kitten/components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<CoinModuleParamList, 'CoinDetail'>

const CoinDetail = ({ navigation }: Props) => {
  return (
    <S.View>
      <S.Text>Coin Detail</S.Text>
      <Button onPress={() => navigation.navigate('CriptoCoins')}>
        Navegar
      </Button>
    </S.View>
  )
}

export default CoinDetail
