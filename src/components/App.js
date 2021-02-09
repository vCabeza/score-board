import { Container, Row, Col } from 'react-bootstrap';
import GamesList from './scoreboard/GamesList';

function App() {
  return (
    <Container>
      <div className='App-header'>
        <Row>
          <Col lg={{ offset: 4 }}>
            <h1>Score Board</h1>
          </Col>
        </Row>
      </div>
      <div className='App-body'>
        <GamesList />
      </div>
    </Container>
  );
}

export default App;
