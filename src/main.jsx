import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Form from './components/form.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/',
      element:<Login/>

    },
  {
    path:'/form',
    element:<Form/>
  }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
