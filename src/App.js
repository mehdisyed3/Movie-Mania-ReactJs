
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Results from './Results/Results';
import requests from './requests'
import Footer from './Footer/Footer';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">

      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
      <Footer />

    </div>
  );
}

export default App;
