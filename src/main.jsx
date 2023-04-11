import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Layout/Admin';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Admin></Admin>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('joblistings.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
