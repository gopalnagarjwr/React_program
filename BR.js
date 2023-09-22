import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
function BR() {
  return (
    <center>
    <BrowserRouter>
     <Link to='/' >Home</Link><br></br>
     <Link to='/About' >About</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        {/* <Route path='/*' element={<h1>error 404 Page</h1>} /> */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
    </center>
  );
}

export default BR;
