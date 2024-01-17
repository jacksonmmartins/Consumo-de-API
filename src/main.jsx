/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//element = elemento principal - página principal da aplicação 
//children página secundária da aplicação, definidas pelo um path = indicando a rota

//paginas 
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

const router  = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: < Home />
      },
      {
        path: '/new',
        element: < NewPost />
      },
    ],

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
