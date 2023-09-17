import React from "react";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
    return <>
        <header>
            <h1>Header site</h1>
        </header>
        <main className="main">
            <Outlet />
        </main>
        <footer>
            <h1>Footer site</h1>
        </footer>
    </>;
}
