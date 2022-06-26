import { Routes, Route } from 'react-router-dom';
import { Home, About, Store } from '../exports/pages';
import { RoutingPath } from '../exports/routes';

const Routing = () => {
  return (
    <Routes>
      <Route path={RoutingPath.HOME} element={<Home />} />
      <Route path={RoutingPath.STORE} element={<Store />} />
      <Route path={RoutingPath.ABOUT} element={<About />} />
    </Routes>
  );
};

export default Routing;
