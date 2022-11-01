import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Channel from './Channel';
import { findByLabelText } from '@testing-library/react';

function Chat() {
  return (
    <Container>
      <ChatHeader>
        <Top>
          <ChannelTitle>
            <h3># MyChannel</h3>
            <StarBorderIcon />
          </ChannelTitle>
          <ChannelDetails>
            <span>Details</span>
            <InfoOutlinedIcon />
          </ChannelDetails>
        </Top>
        <Bottom>
          <p>Community-wide announcements</p>
        </Bottom>
      </ChatHeader>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`;

const ChatHeader = styled.div`

`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Bottom = styled.div`
  color:darkgray;
`;

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: gray;

  span {
    margin-right: 10px;
  }
`;

export default Chat