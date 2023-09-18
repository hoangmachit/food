import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../axios";
export default function AdminCustomerDetail() {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({
        status: false,
        message: ""
    });
    useEffect(() => {
        const getDetail = async () => {
            await api
                .get(`/api/admin/customer/${customerId}`)
                .then(function(response) {
                    const { data, status } = response;
                    if (status === 200) {
                        setCustomer(data.customer);
                    }
                })
                .catch(function(error) {
                    console.error(error);
                })
                .finally(function() {
                    setLoading(false);
                });
        };
        getDetail();
    }, []);
    const handleCustomer = (e, type) => {
        const newCustomer = { ...customer };
        newCustomer[type] = e.target.value;
        setCustomer(newCustomer);
    };
    const updateCustomer = async e => {
        setErrors({});
        setMessage({});
        e.preventDefault();
        await api
            .put(`/api/admin/customer/${customerId}`, customer)
            .then(response => {
                setErrors({});
                setMessage({
                    status: true,
                    message: response.data.message
                });
            })
            .catch(error => {
                setErrors(error.response.data.errors);
            })
            .finally(function() {
                setLoading(false);
            });
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h3">Customer Detail</h1>
                <Link className="btn btn-secondary" to={"/admin/customer"}>
                    Back
                </Link>
            </div>
            {message.status && (
                <div className="alert alert-success">
                    <p className="m-0">{message.message}</p>
                </div>
            )}
            <div className="mb-4">
                {loading ? (
                    <h4 className="h4">Fetching</h4>
                ) : (
                    <form
                        onSubmit={e => updateCustomer(e)}
                        role="form"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div className="mb-3">
                            <label htmlFor="full_name" className="form-label">
                                Full name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${
                                    errors && errors.full_name
                                        ? "is-invalid"
                                        : ""
                                }`}
                                autoComplete="off"
                                id="full_name"
                                onChange={e => handleCustomer(e, "full_name")}
                                value={customer.full_name}
                            />
                            {errors && errors.full_name && (
                                <div className="invalid-feedback">
                                    {errors.full_name}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="phone_number"
                                className="form-label"
                            >
                                Phone number
                            </label>
                            <input
                                type="text"
                                className={`form-control ${
                                    errors && errors.phone_number
                                        ? "is-invalid"
                                        : ""
                                }`}
                                autoComplete="off"
                                id="phone_number"
                                onChange={e =>
                                    handleCustomer(e, "phone_number")
                                }
                                value={customer.phone_number}
                            />
                            {errors && errors.phone_number && (
                                <div className="invalid-feedback">
                                    {errors.phone_number}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select
                                className={`form-select ${
                                    errors && errors.status ? "is-invalid" : ""
                                }`}
                                id="status"
                                value={customer.status}
                                onChange={e => handleCustomer(e, "status")}
                            >
                                <option value="">Choice status</option>
                                <option value="1">Published</option>
                                <option value="0">Private</option>
                            </select>
                            {errors && errors.status && (
                                <div className="invalid-feedback">
                                    {errors.status}
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
