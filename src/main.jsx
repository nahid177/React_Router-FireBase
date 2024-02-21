import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Carousels from './component/Home/Carousels.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element:<Carousels></Carousels>
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
