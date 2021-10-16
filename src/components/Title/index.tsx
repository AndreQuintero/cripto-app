import React from 'react'
import * as S from './style'

type TitleProps = {
  title: string
  description?: string
}

const Title = ({ title, description = '' }: TitleProps) => (
  <S.View>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.View>
)

export default Title
