import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import MainRoutes from './routing/MainRoutes';

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App