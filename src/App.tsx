import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import Forum from './pages/Forum';

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Forum/>
      </div>
    </>
  );
}

export default App;
