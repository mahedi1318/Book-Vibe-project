import { createBrowserRouter, } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/listedbooks",
                element: <ListedBooks />,
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead />,
            },
        ]
    }
])

export default router;