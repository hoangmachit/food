import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../axios";
export default function AdminProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState();
    const [message, setMessage] = useState({
        status: false,
        message: ""
    });
    useEffect(() => {
        const getDetail = async () => {
            await api
                .get(`/api/admin/product/${productId}`)
                .then(function(response) {
                    const { data, status } = response;
                    if (status === 200) {
                        setProduct(data.product);
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
    const handleProduct = (e, type) => {
        const newProduct = { ...product };
        newProduct[type] = e.target.value;
        setProduct(newProduct);
    };
    const updateProduct = async e => {
        setErrors({});
        setMessage({});
        e.preventDefault();
        await api
            .put(`/api/admin/product/${productId}`, product)
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
    const handleFile = e => {
        setFile(e.target.files[0]);
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h3">Product Detail</h1>
                <Link className="btn btn-secondary" to={"/admin/product"}>
                    Back
                </Link>
            </div>
            {message.status && (
                <div className="alert alert-success">
                    <p className="m-0">{message.message}</p>
                </div>
            )}
            <div>
                {loading ? (
                    <h4 className="h4">Fetching</h4>
                ) : (
                    <form
                        onSubmit={e => updateProduct(e)}
                        role="form"
                        method="POST"
                        encType="multipart/form-data"
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
                                onChange={e => handleProduct(e, "name")}
                                value={product.name}
                            />
                            {errors && errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">
                                Desc
                            </label>
                            <textarea
                                className={`form-control ${
                                    errors && errors.desc ? "is-invalid" : ""
                                }`}
                                placeholder=""
                                onChange={e => handleProduct(e, "desc")}
                                id="desc"
                                rows={5}
                                value={product.desc}
                            ></textarea>
                            {errors && errors.desc && (
                                <div className="invalid-feedback">
                                    {errors.desc}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">
                                Photo
                            </label>
                            <input
                                type="file"
                                className={`form-control`}
                                id="file"
                                onChange={e => handleFile(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type="number"
                                className={`form-control ${
                                    errors && errors.price ? "is-invalid" : ""
                                }`}
                                id="price"
                                onChange={e => handleProduct(e, "price")}
                                value={product.price}
                            />
                            {errors && errors.price && (
                                <div className="invalid-feedback">
                                    {errors.price}
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
                                value={product.status}
                                onChange={e => handleProduct(e, "status")}
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
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
