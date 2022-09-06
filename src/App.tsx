import React from 'react';
import Header from './components/Header';
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
