import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Menu/Sidebar';
import Formlogin from './Components/Login/Formlogin';
function App() {
  return (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <Formlogin />
    </div>
  );
}

export default App;
