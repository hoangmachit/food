import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { SignIn, Trash, Minus, Plus } from "../../components/Icon";
const Orders = () => {
    const [isLogin, setIsLogin] = React.useState(true);
    return (
        <>
            <Breadcrumb name="Orders" />
            <section id="orders-Page" className="mb-3">
                <form className="form-cart validation-cart" method="post" action="" encType="multipart/form-data">
                    <div className="wrap-cart">
                        <div className="row">
                            <div className="top-cart col-12 col-lg-7 ps-0">
                                <div className="card">
                                    <div className="card-header"><p className="title-cart">Giỏ hàng của bạn:</p></div>
                                    <div className="card-body">
                                        <div className="list-procart">
                                            <div className="procart procart-label">
                                                <div className="form-row">
                                                    <div className="pic-procart col-3 col-md-2">Hình ảnh</div>
                                                    <div className="info-procart col-6 col-md-5">Tên sản phẩm</div>
                                                    <div className="quantity-procart col-3 col-md-2">
                                                        <p>Số lượng</p>
                                                        <p>Thành tiền</p>
                                                    </div>
                                                    <div className="price-procart col-3 col-md-3">Thành tiền</div>
                                                </div>
                                            </div>
                                            <div className="procart procart-220787ad7829c9cbc7e9953cb1c36fb3">
                                                <div className="form-row">
                                                    <div className="pic-procart col-3 col-md-2">
                                                        <a className="text-decoration-none" href="may-ham-khan-uot-moaz-be-be-new-95.html" target="_blank" title="Máy hâm khăn ướt Moaz Bé Bé new 95%">
                                                            <img src="https://via.placeholder.com/80" alt="Image" /></a>

                                                        <a className="del-procart text-decoration-none" data-code="220787ad7829c9cbc7e9953cb1c36fb3">
                                                            <span className="d-flex justify-content-center align-items-center"><Trash /> &nbsp; Xóa</span>
                                                        </a>
                                                    </div>
                                                    <div className="info-procart col-6 col-md-5">
                                                        <h3 className="name-procart"><a className="text-decoration-none" href="may-ham-khan-uot-moaz-be-be-new-95.html" target="_blank" title="Máy hâm khăn ướt Moaz Bé Bé new 95%">Máy hâm khăn ướt Moaz Bé Bé new 95%</a></h3>
                                                        <div className="properties-procart">
                                                            <p>It is a long established fact that a reader will be distracted by the readable</p>
                                                        </div>
                                                    </div>
                                                    <div className="quantity-procart col-3 col-md-2">
                                                        <div className="price-procart price-procart-rp">
                                                            <p className="price-new-cart load-price-new-220787ad7829c9cbc7e9953cb1c36fb3">
                                                                300.000đ													</p>
                                                            <p className="price-old-cart load-price-220787ad7829c9cbc7e9953cb1c36fb3">
                                                                600.000đ													</p>
                                                        </div>
                                                        <div className="quantity-counter-procart quantity-counter-procart-220787ad7829c9cbc7e9953cb1c36fb3 d-flex align-items-stretch justify-content-between">
                                                            <span className="counter-procart-minus counter-procart" data-type="minus">
                                                                <Minus />
                                                            </span>
                                                            <input type="number" className="quantity-procart" min="1" defaultValue="1" data-pid="73" data-code="220787ad7829c9cbc7e9953cb1c36fb3" />
                                                            <span className="counter-procart-plus counter-procart" data-type="plus">
                                                                <Plus />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price-procart col-3 col-md-3">
                                                        <p className="price-new-cart load-price-new-220787ad7829c9cbc7e9953cb1c36fb3">
                                                            300.000đ												</p>
                                                        <p className="price-old-cart load-price-220787ad7829c9cbc7e9953cb1c36fb3">
                                                            600.000đ												</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="money-procart">
                                            <div className="total-procart d-flex align-items-center justify-content-between">
                                                <p>Tổng tiền:</p>
                                                <p className="total-price load-price-total">300.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-cart col-12 col-lg-5 pe-0">
                                {isLogin && (
                                    <>
                                        <div className="card">
                                            <div className="card-header">
                                                <p className="title-cart">Hình thức thanh toán:</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="section-cart">
                                                    <div className="form-check d-flex justify-content-start align-items-center">
                                                        <input className="form-check-input input-custom" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                        <label className="form-check-label label-custom" htmlFor="flexRadioDefault1">
                                                            MoMo Payment
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex justify-content-start align-items-center mt-3">
                                                        <input className="form-check-input input-custom" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                        <label className="form-check-label label-custom" htmlFor="flexRadioDefault2">
                                                            CASH Payment
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                <p className="title-cart">Thông tin cá nhân:</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="section-cart">
                                                    <div className="mb-2">
                                                        <label htmlFor="full_name" className="form-label">Full name</label>
                                                        <input type="text" className="form-control" readOnly id="full_name" placeholder="AGL_Mạch Văn Hoàng (ホアン)" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="email" className="form-label">Email address</label>
                                                        <input type="email" className="form-control" id="email" readOnly placeholder="your-email@gmail.com" />
                                                    </div>
                                                    <div className="d-flex mt-3">
                                                        <button type="submit" className="btn-cart btn btn-primary btn-lg btn-block" name="thanhtoan">Thanh toán</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {!isLogin && (
                                    <div className="card">
                                        <div className="card-header">
                                            <p className="title-cart">Đăng nhập tài khoản:</p>
                                        </div>
                                        <div className="card-body">
                                            <div className="section-cart">
                                                <div className="infomation-account text-center">
                                                    <p className="mt-3">Vui lòng đăng nhập trước khi đặt đơn hàng.</p>
                                                </div>
                                                <div className="action-login d-flex justify-content-between align-items-center">
                                                    <button className="">
                                                        <SignIn /> Đăng ký tài khoản
                                                    </button>
                                                    <button className="">
                                                        <SignIn /> Đăng nhập
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};
export default Orders;
