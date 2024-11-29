import React from 'react';
import './App.css';
import Header from './Header/header';
import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';
import Profil from './Content/profile';

function App() {
  return (
      <div className="App">
        <Header />
        <Profil />
        <Footer />
      </div>
  );
}

export default App;
