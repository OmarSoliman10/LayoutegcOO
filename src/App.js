import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import HomePage from './Component/HomePage';
import About from './Component/About';
import Business from './Component/Business';
import ServiceUs from './Component/ServiceUs';
import Contact from './Component/Contact';
import RootLayout from './Component/RootLayout';

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {index:true , element: <HomePage />},
      {path :"home" , element: <HomePage />},
      {path :"about" , element: <About />},
      {path :"business" , element: <Business />},
      {path :"service" , element: <ServiceUs />},
      {path :"contact" , element: <Contact />},
      
    ],
  },
]);

function App() {
  return (<>
   <RouterProvider router={router} />
  </>
  );
}

export default App;
