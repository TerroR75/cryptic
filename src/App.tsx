import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id='home' className='App'>
      <Navbar />
      <div className='App_content flex flex-col items-center w-full pt-32'>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
