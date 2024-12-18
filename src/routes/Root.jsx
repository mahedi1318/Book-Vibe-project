import { createBrowserRouter, } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import DetailsPage from "../pages/DetailsPage";
import BooksAllPage from "../pages/BooksAllPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,                                
            },
            {
                path: "/booksall",
                element: <BooksAllPage />,
                loader: ()=> fetch('/bookListData.json')  
            },
            {
                path: "/listedbooks",
                element: <ListedBooks />,   
                loader: ()=> fetch('/bookListData.json')            
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead />,
            },
            {
                path: "/details/:detailsid",
                element: <DetailsPage />,      
                loader: ()=> fetch('/bookListData.json')         
            }
        ]
    }
])

export default router;