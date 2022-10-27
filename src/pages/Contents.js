import React from 'react'
import styled from 'styled-components'
import Featured from '../components/Featured'
import { Label1 } from './dashboardElements'

const ContentContainer = styled.div`
    flex: 4;
`

const Contents = () => {
  return (
    <ContentContainer >
        <Label1>OVERVIEW</Label1>
        <Featured />
    </ContentContainer>
  )
}

export default Contents