import { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Host from './components/Host';

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
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
        <Route path="/createListing" element={<Host/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
