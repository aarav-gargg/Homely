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
import TripList from './components/TripList';
import WishList from './components/WishList';
import PropertyList from './components/PropertyList';
import Reservations from './components/Reservations';
import About from './components/About';

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
        <Route path="/:userId/trips" element={<TripList/>}/>
        <Route path="/:userId/wishList" element={<WishList/>}/>
        <Route path="/:userId/properties" element={<PropertyList/>}/>
        <Route path="/:userId/reservations" element={<Reservations/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
