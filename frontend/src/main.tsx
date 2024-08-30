import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home, {loader as homeLoader} from './pages/Home.tsx';
import Root from './root.tsx';
import Recipe, {loader as recipeLoader} from './pages/Recipe.tsx';
import ErrorBoundary from './error.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
        loader: homeLoader,

      },
     
      {
        path: "/recipe/:id",
        element: <Recipe/>,
        loader: recipeLoader,
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
