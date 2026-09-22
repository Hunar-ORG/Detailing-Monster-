import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div className="min-h-screen bg-[#09090b] flex flex-col">
    <Header />
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
