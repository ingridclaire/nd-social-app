import React from 'react'
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
        <UserContainer>
          <Name>Ingrid</Name>
          <UserImage>
            <img src="/favicon.ico"/>
          </UserImage>
        </UserContainer>
    </Container>
  )
}

export const Container = styled.div`
  background: purple;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 1rem;
`;

const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;

  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding-right: 1rem;
  height: 100%;
  right: 0;
`;

const Name = styled.div`
  padding-right: 1rem;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  img {
    width: 100%;
  }
`;

export default Header