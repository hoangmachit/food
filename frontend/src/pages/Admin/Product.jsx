import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../axios";
export default function AdminProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            await api.get('/admin/product').then(function (response) {
                const { data, status } = response;
                if (status === 200) {
                    setProducts(data.products);
                }
            }).catch(function (error) {
                console.error(error);

            }).finally(function () {
                setLoading(false);
            });
        };
        getData();
    }, []);
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h3">Product</h1>
            </div>
            <h4>Danh sách sản phẩm</h4>
            <div className="table-responsive">
                {loading ? (
                    <h1>Fetching</h1>
                ) : (
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                return <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.photo}</td>
                                    <td>{product.price}</td>
                                    <td>{product.status}</td>
                                    <td>{product.total_buy}</td>
                                    <td>
                                        <Link className="btn btn-secondary me-2" to={`/admin/product/${product.id}`}><small>Edit</small></Link>
                                        <button className="btn btn-danger"><small>Remove</small></button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
