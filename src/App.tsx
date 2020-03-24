import React, { FC } from 'react';
import WorldStats from './components/WorldStats';
import CountryStats from './components/CountryStats';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="App md:flex md:justify-center md:items-center min-h-screen p-4">
      <div className="md:w-7/12">
        <Header/>
        <CountryStats />
        <WorldStats />
        <Footer />
      </div>
    </div>
  )
}

export default App;
