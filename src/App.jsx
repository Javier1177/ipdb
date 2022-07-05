import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Home from './pages/home.page';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<div>HEYHEY</div>} />
      </Route>
    </Routes>
  );
};

export default App;
