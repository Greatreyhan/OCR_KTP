import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/root';
import Dashboard from './routes/dashboard';
import reportWebVitals from './reportWebVitals';
import InputData from './routes/inputData';
import PengolahanData from './routes/pengolahanData';
import ReportData from './routes/reportData';
import Koordinator from './routes/koordinator';
import Navigation from './components/navigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/input-data",
    element: <InputData />,
  },
  {
    path: "/pengolahan-data",
    element: <PengolahanData />,
  },
  {
    path: "/report-data",
    element: <ReportData />,
  },
  {
    path: "/koordinator",
    element: <Koordinator />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body className='flex w-screen'>
        <div class="w-2/12">
          <Navigation />
        </div>
        <div className='w-10/12'>
          <RouterProvider router={router} />
        </div>
    </body>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
