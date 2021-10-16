import { Layout, Text as KText } from '@ui-kitten/components'
import styled from 'styled-components/native'

export const View = styled(Layout)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled(KText)`
  font-size: 24px;
`

export const Description = styled(KText)`
  font-size: 16px;
  font-weight: 300;
`
