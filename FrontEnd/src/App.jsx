import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<SignUp />} />
        <Route path='/Login' element={<Login/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
