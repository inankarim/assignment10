import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import Dashboard from './Components/Dashborad/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewProducts from './Components/NewProducts/NewProducts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/dash",
        loader:()=>fetch('./product.json'),
        element:<Dashboard></Dashboard>,
        

      },
      {
        path:"/stat",
        element:<Statistics></Statistics>
      },
      {
        path:'/products/:product_id',
        loader:()=>fetch('./product.json'),
        element:<ProductDetails></ProductDetails>,
      },
      {
        path:'/new',
        element:<NewProducts></NewProducts>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
