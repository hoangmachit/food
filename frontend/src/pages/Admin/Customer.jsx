import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../axios";
export default function AdminCustomer() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await api
                .get(`/api/admin/customer`)
                .then(response => {
                    const { data } = response;
                    if (data.success) {
                        setCustomers(data.customers);
                    }
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        getData();
    }, []);
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h3">Customer</h1>
            </div>
            <div className="table-responsive mb-4">
                {loading ? (
                    <h1 className="h4">Fetching</h1>
                ) : (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Full name</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => {
                                return (
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.full_name}</td>
                                        <td>{customer.phone_number}</td>
                                        <td>
                                            <span
                                                className={`badge bg-${
                                                    customer.status === 1
                                                        ? "success"
                                                        : "secondary"
                                                }`}
                                            >
                                                {customer.status === 1
                                                    ? "Published"
                                                    : "Privated"}
                                            </span>
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-secondary me-2"
                                                to={`/admin/customer/${customer.id}`}
                                            >
                                                <small>Edit</small>
                                            </Link>
                                            <button className="btn btn-danger">
                                                <small>Remove</small>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
