import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
//import Footer from '../Footer';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Navigation />
      
      <div className="layout__content">
        <main className="layout__main">
          <Outlet />
        </main>
        
        <Sidebar className="layout__sidebar" />
      </div>
      
    </div>
  );
}

export default Layout;