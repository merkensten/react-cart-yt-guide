import { Container } from 'react-bootstrap';
import { Routing } from './exports/routes';
import { Navbar } from './exports/components';

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routing />
      </Container>
    </>
  );
}

export default App;
