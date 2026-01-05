import React from 'react';
import {  RouterProvider } from 'react-router-dom';
import AppRoute from "./routes/AppRoutes"
export default function App() {
  
  return <RouterProvider  router={AppRoute}/>
}
