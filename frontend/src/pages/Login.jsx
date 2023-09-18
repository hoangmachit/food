import api from "../axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Login() {
    if (localStorage.getItem("accessToken") !== null) {
        return <Navigate to={`/admin`} />;
    }
    const navigate = useNavigate();
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin123");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        success: false,
        message: null
    });
    const handleLogin = async e => {
        e.preventDefault();
        setLoading(true);
        setAlert({ show: false, success: false, message: null });
        await api
            .post(`/api/auth/login`, {
                username,
                password,
                remember
            })
            .then(response => {
                const { data, status } = response;
                setAlert({
                    show: true,
                    success: data.success,
                    message: data.message
                });
                if (status === 200 && data.success) {
                    localStorage.setItem("accessToken", data.accessToken);
                    navigate("/admin");
                }
            })
            .catch(error => {
                setErrors(error.response.data.errors);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: "100vh",
                    background: "#ebebeb"
                }}
            >
                <form
                    onSubmit={e => handleLogin(e)}
                    role="form"
                    method="POST"
                    style={{
                        width: "400px",
                        background: "#fff",
                        padding: "15px",
                        borderRadius: "3px"
                    }}
                >
                    <h4 className="text-center mb-4">Đăng nhập tài khoản</h4>
                    {alert.show && (
                        <div
                            className={`alert alert-${
                                alert.success ? "success" : "danger"
                            }`}
                        >
                            <p className="m-0">{alert.message}</p>
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Tài khoản
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                errors && errors.username ? "is-invalid" : ""
                            }`}
                            disabled={loading}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            id="username"
                            autoComplete="off"
                        />
                        {errors && errors.username && (
                            <div className="invalid-feedback">
                                {errors.username}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            className={`form-control ${
                                errors && errors.password ? "is-invalid" : ""
                            }`}
                            id="password"
                            disabled={loading}
                            value={password}
                            autoComplete="off"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {errors && errors.password && (
                            <div className="invalid-feedback">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                            checked={remember}
                            onChange={e => setRemember(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="remember">
                            Nhớ mật khẩu
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn w-100"
                        disabled={loading}
                        style={{
                            background: "#000",
                            color: "#fff",
                            borderRadius: "5px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}
                    >
                        {loading ? "Đang xử lý..." : "Đăng nhập"}
                    </button>
                </form>
            </div>
        </>
    );
}
