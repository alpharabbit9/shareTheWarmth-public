import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider.jsx';
import 'animate.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
