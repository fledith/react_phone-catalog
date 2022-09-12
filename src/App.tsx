import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage';
import { Phones } from './pages/Phones';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="phones" element={<Phones />} />
      <Route path="tablets" element={<Tablets />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
);

export default App;
