import React from 'react'
import styled from 'styled-components'

function Channel({info}) {
  return (
    <Container>{info.name}</Container>
  )
}

const Container = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 19px;
  :hover {
    background: #350d36;
  }
`;

export default Channel