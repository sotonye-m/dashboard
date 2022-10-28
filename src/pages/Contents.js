import React from 'react'
import styled from 'styled-components'
import Featured from '../components/Featured'

const ContentContainer = styled.div`
    flex: 4;
    width: 100%
    height: 100%
`

const Contents = () => {
  return (
    <ContentContainer >
        <Featured />
    </ContentContainer>
  )
}

export default Contents