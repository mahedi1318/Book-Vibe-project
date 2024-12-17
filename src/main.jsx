import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import router from './routes/Root.jsx';
import BookProvider from './components/context/BookProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
       
    </BookProvider>
  </StrictMode>,
)
