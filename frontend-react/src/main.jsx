import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navlog from './pages/login/Navlog.jsx';
import Navreg from './pages/register/Navreg.jsx';
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      }
    ]
  },
  {
    path: "/",
    element: <Navlog />
  },
  {
    path: "/register",
    element: <Navreg />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
