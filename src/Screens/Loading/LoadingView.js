import React from 'react'
import {Container, Header, Content, Spinner} from 'native-base'

export default props => {
  return (
    <Container>
      <Content
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        <Spinner color="blue" />
      </Content>
    </Container>
  )
}
