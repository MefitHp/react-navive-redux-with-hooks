import React from 'react'
import styled from '@emotion/native'

let HeaderView = styled.View`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-top: 15px;
  elevation: 2;
  position: relative;
`

let HeaderText = styled.Text`
  font-size: 20px;
`

export default Header = (props) => (
  <HeaderView>
    <HeaderText>{props.children}</HeaderText>
  </HeaderView>
)