import React from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Settings from './components/Setting';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="app">
      <Header />
      <div className="content">
        <SideBar />
        <Container/>
      </div>
      <Footer />
      <Settings />
    </div>
    </div>
  );
}

export default App;
