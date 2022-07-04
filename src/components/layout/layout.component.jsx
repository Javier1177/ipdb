import { Outlet } from 'react-router-dom';

import Header from './header/header.component';
import Footer from './footer/footer.component';

import './layout.styles.scss';

const Layout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
