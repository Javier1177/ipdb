import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>Esto es la home</div>} />
      </Route>
    </Routes>
  );
};

export default App;
