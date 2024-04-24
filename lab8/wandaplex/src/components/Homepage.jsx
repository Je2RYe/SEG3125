import React from 'react';
import Topbar from './Topbar';
import Slide from './Slide';
import Movies from './Movies';
import { useState } from 'react';

function Homepage() {
  
  const [searchValue, setSearchValue] = useState('');
  return (

    <div className='Home_container'>
      <div><Topbar setSearchValue={setSearchValue}/></div>
      <div><Slide /></div>
      <div><Movies searchValue={searchValue}/></div>
      

    </div>
  );
}

export default Homepage;