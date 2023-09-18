import React from "react";
import { Outlet, Navigate, Link, useNavigate } from "react-router-dom";
import "./admin.css";
export default function AdminLayout() {
    const userAuthenticated = localStorage.getItem("accessToken") !== null;
    if (!userAuthenticated) {
        return <Navigate to="/login" />;
    }
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.removeItem("accessToken");
        navigate(`/login`);
        return true;
    };
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                    to="/admin/"
                >
                    Company name
                </Link>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input
                    className="form-control form-control-dark w-100"
                    type="text"
                    placeholder="Search"
                />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <button
                            onClick={e => handleLogout(e)}
                            className="nav-link px-3"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                    >
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to={`/admin`}
                                    >
                                        <span data-feather="home"></span>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={`/admin/order`}
                                    >
                                        <span data-feather="file"></span>
                                        Orders
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={`/admin/product`}
                                    >
                                        <span data-feather="shopping-cart"></span>
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={`/admin/customer`}
                                    >
                                        <span data-feather="users"></span>
                                        Customers
                                    </Link>
                                </li>
                            </ul>
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <Link
                                    className="link-secondary"
                                    to="/"
                                    aria-label="Add a new report"
                                >
                                    <span data-feather="plus-circle"></span>
                                </Link>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={`/admin/config`}
                                    >
                                        <span data-feather="file-text"></span>
                                        Configs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
