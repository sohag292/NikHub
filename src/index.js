import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Blogs from './components/Blogs/Blogs';
import Main from './components/Layout/Main';
import FeaturesDetails from './components/FeaturesDetails/FeaturesDetails';
import Error from './components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/featuresJobs.json')
      },
      {
        path: "job/:jobId",
        element: <FeaturesDetails />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
  
);

