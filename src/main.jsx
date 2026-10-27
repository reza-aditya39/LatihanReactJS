import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

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
          ]
        }
      ])}>    
    </RouterProvider>
  </StrictMode>,
)
