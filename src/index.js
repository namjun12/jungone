import React from 'react';
// import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { HelmetProvider } from 'react-helmet-async';

// snap
import { hydrate, render } from "react-dom";

const AppSnap = (
    <HelmetProvider>
        <RouterProvider router={router} />
    </HelmetProvider>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(AppSnap, rootElement);
} else {
    render(AppSnap, rootElement);
}
// snap E

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// );