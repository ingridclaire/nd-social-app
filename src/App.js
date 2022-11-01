import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
          <Routes>
            <Route path="/room" element={<Chat />}/>
            <Route exact path="/" element={<Login />}/>
          </Routes>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
`;

export default App;
