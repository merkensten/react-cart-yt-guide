import { Container } from 'react-bootstrap';
import { Routing } from './exports/routes';
import { Navbar } from './exports/components';
import { ShoppingCartProvider } from './exports/context';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routing />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
