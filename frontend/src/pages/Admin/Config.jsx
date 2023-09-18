import React, { useEffect, useState } from "react";
import api from "../../axios";
export default function AdminConfig() {
    const [configs, setConfigs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(false);
    const [config, setConfig] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({
        status: false,
        message: ""
    });
    useEffect(() => {
        const getConfigs = async () => {
            setLoading(true);
            await api
                .get(`/api/admin/config`)
                .then(response => {
                    const { data } = response;
                    if (data.success) {
                        setConfigs(data.configs);
                    }
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        getConfigs();
    }, []);
    const handleForm = (e, config) => {
        e.preventDefault();
        setForm(true);
        setConfig(config);
    };
    const handleConfig = (e, type) => {
        const newConfig = { ...config };
        newConfig[type] = e.target.value;
        setConfig(newConfig);
    };
    const updateConfig = async e => {
        e.preventDefault();
        setMessage({});
        setErrors({});
        await api
            .put(`/api/admin/config/${config.id}`, config)
            .then(response => {
                const { data } = response;
                if (data.success) {
                    setConfig(data.config);
                    setMessage({
                        status: true,
                        message: data.message
                    });
                }
            })
            .catch(error => {
                setErrors(error.response.data.errors);
            })
            .finally(() => {});
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h3">Configs</h1>
            </div>
            {message && message.status && (
                <div className="alert alert-success">
                    <p className="m-0">{message.message}</p>
                </div>
            )}
            {form && config && (
                <form
                    onSubmit={e => updateConfig(e)}
                    className="mb-3"
                    method="POST"
                >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                errors && errors.name ? "is-invalid" : ""
                            }`}
                            id="name"
                            autoComplete="off"
                            value={config.name}
                            onChange={e => handleConfig(e, "name")}
                        />
                        {errors && errors.name && (
                            <div className="invalid-feedback">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="value" className="form-label">
                            Value
                        </label>
                        <input
                            type="text"
                            className={`form-control ${
                                errors && errors.value ? "is-invalid" : ""
                            }`}
                            id="value"
                            autoComplete="off"
                            value={config.value}
                            onChange={e => handleConfig(e, "value")}
                        />
                        {errors && errors.value && (
                            <div className="invalid-feedback">
                                {errors.value}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            )}
            <div className="table-responsive mb-4">
                {loading ? (
                    <h1 className="h4">Fetching</h1>
                ) : (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Value</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {configs.map(config => {
                                return (
                                    <tr key={config.id}>
                                        <td scope="row">{config.id}</td>
                                        <td>{config.name}</td>
                                        <td>{config.value}</td>
                                        <td>
                                            <button
                                                onClick={e =>
                                                    handleForm(e, config)
                                                }
                                                className="btn btn-secondary me-2"
                                            >
                                                <small>Edit</small>
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
