import React from 'react';

import './App.css'
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Navbar from './landing_page/Navbar';
import Footer from "./landing_page/Footer";
import NotFound from './landing_page/NotFound';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<div>
      <Navbar/>
      <HomePage/>
      <Footer/>
      </div>
    },
    {
      path:"/signup",
      element:<div>
      <Navbar/>
      <Signup/>
      <Footer/>
      </div>
    },
    { 
      path:"/about",
      element:<div>
      <Navbar/>
      <AboutPage/>
      <Footer/>
      </div>
    },
    { 
      path:"/product",
      element:<div>
      <Navbar/>
      <ProductPage/>
      <Footer/>
      </div>
    },
    { 
      path:"/pricing",
      element:<div>
      <Navbar/>
      <PricingPage/>
      <Footer/>
      </div>
    },
    { 
      path:"/support",
      element:
      <div>
      <Navbar/>
      <SupportPage/>
      <Footer/></div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
    
  ]);
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
