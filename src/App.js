import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodList from './Page/FoodList/FoodList';
import Home from './Page/Home/Home';
import Restrants from './Page/Restrants/Restrants';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service/:category' element={<Restrants/>}/>
      <Route path='/service/restrant/:type' element={<Restrants/>}/>
      <Route path='/menu/:restrantName' element={<FoodList/>}/>
    </Routes>
    
  );
};

export default App;