import React from 'react'
import styled from 'styled-components'

function MainChannelItem({channel}) {
  return (
    <Container>
      {channel.icon}
      <span>{channel.text}</span>
    </Container>
  )
}

const Container = styled.div`
  color: rgb(188,171,188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor:pointer;
  :hover {
    background: #350d36;
  }
`;

export default MainChannelItem