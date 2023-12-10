import React from 'react';
import Quote from './components/Quote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <Quote />
      <ToastContainer />
    </div>
  )
}

export default App;
