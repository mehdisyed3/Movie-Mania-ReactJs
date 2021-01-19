
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Results from './Results/Results';
import requests from './requests'


//58 42
//API Key: 30b033655413f99444343fc0148ecfa4
  // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGIwMzM2NTU0MTNmOTk0NDQzNDNmYzAxNDhlY2ZhNCIsInN1YiI6IjVmN2I4MjE5MDIxY2VlMDAzNTMyMGNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZenmcyldCGm-NSZqZbfsxNs5an7XEVcPgVgyDUmo0yY
function App() {
  const [selectedOption, setSelectedOption]= useState(requests.fetchTrending)
  return (
    <div className="app">

      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption ={selectedOption} />
    </div>
  );
}

export default App;
