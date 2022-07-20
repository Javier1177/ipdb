import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Home from './pages/Home/home.page';
import Pokemon from './pages/Pokemon/pokemon.page';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='pokemon/*' element={<Pokemon />} />
      </Route>
    </Routes>
  );
};

export default App;
