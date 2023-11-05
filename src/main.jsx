import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Body, WatchPage} from "./components/components.js"
import MainContainer from './components/MainContainer.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />, 
        children: [
          {
            path: '/watch',
            element: <WatchPage />
          },
          {
            path: '/',
            element: <MainContainer />
          },
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
