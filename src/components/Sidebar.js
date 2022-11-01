import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {sidebarItems, channelData } from '../data/sidebarData';
import MainChannelItem from './MainChannelItem';
import AddIcon from '@mui/icons-material/Add';
import Channel from './Channel';

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>
          Ingrid
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
       {sidebarItems.map(item => <MainChannelItem channel={item} />)}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          Channels <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          {channelData.map(item => <Channel info={item} />)}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  )
}

const Container = styled.div`
  background: #3F0E40;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const ChannelsContainer = styled.div`
margin-top: 10px;
color: rgb(188,171,188);
`;

const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  padding: 0 19px 12px;
`;

const ChannelsList = styled.div`

`;

export default Sidebar