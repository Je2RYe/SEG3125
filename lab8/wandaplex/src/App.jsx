import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Help from './pages/help'
import Movies from './components/Movies';
import Kfpanda from './pages/Kfpanda';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: `/kfpanda`,
    element: <Kfpanda />,
  },
  {
    path: `/dp2`,
    element: <Kfpanda />,
  },
  {
    path: `/GxKTNE`,
    element: <Kfpanda />,
  },
  {
    path: `/GbFE`,
    element: <Kfpanda />,
  },
  {
    path: `/FG`,
    element: <Kfpanda />,
  },
  {
    path: `/Heyvkt`,
    element: <Kfpanda />,
  },
  {
    path:"/help",
    element: <Help />
  }
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;