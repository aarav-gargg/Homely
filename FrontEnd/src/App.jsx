import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<SignUp />} />
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
