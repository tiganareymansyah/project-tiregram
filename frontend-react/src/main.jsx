import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navlog from './pages/login/Navlog.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Navreg from './pages/register/Navreg.jsx';
import Profil from './pages/profil/Profil.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/profil",
        element: <Profil />
      }
    ]
  },
  {
    path: "/",
    element: <Navlog />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
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
