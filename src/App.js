import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Container from './container/Container';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
function App() {
  return (
   <>

    <div className='app'>
      <Navbar />
      <Container />
    </div>

   </>
   
  );
}

export default App;
