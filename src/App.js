import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import { Container } from './styled/styled';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/room" element={<Chat />}/>
             
            <Route exact path="/" element={<Login />}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
