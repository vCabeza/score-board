import { Container } from 'react-bootstrap';
import GamesList from './scoreboard/GamesList';

function App() {
  return (
    <Container>
      <div className='App-header'>
        <h1>Score Board</h1>
      </div>
      <div className='App-body'>
        <GamesList />
      </div>
    </Container>
  );
}

export default App;
