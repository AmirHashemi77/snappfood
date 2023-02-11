import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInAndSignUpPopUp from './Component/LogInAndSignUp/LogInAndSignUpPopUp';
import FoodList from './Page/FoodList/FoodList';
import Home from './Page/Home/Home';
import Restrants from './Page/Restrants/Restrants';
import { useSelector } from 'react-redux';

const App = () => {
  const showLoginPopUp=useSelector((state)=>state.ui.showLoginPopUp)

  return (
    <>
    {showLoginPopUp && <LogInAndSignUpPopUp/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service/:category' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory/:twosubcategory' element={<Restrants/>}/>
      
      <Route path='/menu/:restrantName' element={<FoodList/>}/>
    </Routes>
    </>
    
  );
};

export default App;