import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Devices from "./pages/Devices";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        path: '/',
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'notifications/',
                element: <h2>xddd</h2>
            },
            {
                path: 'devices/',
                element: <Devices/>
            },
        ]
    }
]);

export default router;