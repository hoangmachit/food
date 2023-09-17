import React from "react"
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <Link to={'/admin'} >Admin</Link>
            <h1>Home PAGE</h1>
        </>
    );
}
