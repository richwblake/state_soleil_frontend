import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Layout from './routes/layout';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Portfolio from './routes/portfolio';
import Offerings from './routes/offerings';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
            },
            {
                path: 'offerings',
                element: <Offerings />,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
