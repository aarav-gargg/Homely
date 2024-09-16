import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Host from './components/Host';
import Properties from './components/Properties';
import Property from './components/Property';
import Footer from './components/Footer';

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/listProperty" element={<Host/>}/>
        <Route path="/properties" element={<Properties/>}/>
        <Route path="/properties/:propertyId" element={<Property/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
