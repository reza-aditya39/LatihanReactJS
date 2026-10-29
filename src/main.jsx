import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Team from './pages/Team.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              index: true, // "/" (<parent-path>)
              element: <Home/>
            },
            {
              path: 'contact', // "/contact" (<parent-path>/<childern-path>)
              element: <Contact/>
            },
            {
              path: 'team',
              element: <Team/>
            }
          ]
        },
        // {
        //   path: 'login',
        //   element: <Login/> 
        // },
        // {
        //   path: 'register',
        //   element: <Register/> 
        // }
        {
          path: 'auth',
          children: [
            {
              path: 'login', // /auth/login
              element: <Login/> 
            },
            {
              path: 'register',  // /auth/register
              element: <Register/> 
            }  
          ] 
        },
      ])}>    
    </RouterProvider>
  </StrictMode>,
)
