import React from "react";
import CartItem from "../../components/CartItem";
import { SignIn } from "../../components/Icon";
const Orders = () => {
  /** is Login */
  const [isLogin, setIsLogin] = React.useState(true);
  /* AddToCart */
  const listCarts = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [carts, setCarts] = React.useState(listCarts);
  return (
    <>
      <section id="orders-Page" className="mb-3">
        <form
          className="form-cart validation-cart"
          method="post"
          action=""
          encType="multipart/form-data"
        >
          <div className="wrap-cart">
            <div className="row">
              <div className="top-cart col-12 col-lg-7">
                <div className="card">
                  <div className="card-header">
                    <p className="title-cart">Giỏ hàng của bạn:</p>
                  </div>
                  <div className="card-body">
                    <div className="list-procart">
                      <div className="procart procart-label">
                        <div className="form-row">
                          <div className="pic-procart col-3 col-md-2">
                            Hình ảnh
                          </div>
                          <div className="info-procart col-6 col-md-5">
                            Tên sản phẩm
                          </div>
                          <div className="quantity-procart col-3 col-md-2">
                            <p>Số lượng</p>
                            <p>Thành tiền</p>
                          </div>
                          <div className="price-procart col-3 col-md-3">
                            Thành tiền
                          </div>
                        </div>
                      </div>
                      <div className="procart procart-220787ad7829c9cbc7e9953cb1c36fb3">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((item, index) => {
                            return <CartItem key={index} item={item} />;
                          })}
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
              <div className="bottom-cart col-12 col-lg-5">
                {isLogin && (
                  <>
                    <div className="card">
                      <div className="card-header">
                        <p className="title-cart">Thông tin cá nhân:</p>
                      </div>
                      <div className="card-body">
                        <div className="section-cart">
                          <div className="mb-2">
                            <label htmlFor="full_name" className="form-label">
                              Full name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              id="full_name"
                              placeholder="AGL_Mạch Văn Hoàng (ホアン)"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="email" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              readOnly
                              placeholder="your-email@gmail.com"
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor="phone" className="form-label">
                              Number Phone
                            </label>
                            <input
                              type="phone"
                              className="form-control"
                              id="phone"
                              readOnly
                              placeholder="0909 160 056"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-header">
                        <p className="title-cart">Hình thức thanh toán:</p>
                      </div>
                      <div className="card-body">
                        <div className="section-cart">
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <input
                              className="form-check-input input-custom"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label label-custom"
                              htmlFor="flexRadioDefault1"
                            >
                              MoMo Payment
                            </label>
                          </div>
                          <div className="form-check d-flex justify-content-start align-items-center mt-3">
                            <input
                              className="form-check-input input-custom"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label label-custom"
                              htmlFor="flexRadioDefault2"
                            >
                              CASH Payment
                            </label>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <button
                            type="submit"
                            className="btn-cart btn btn-primary btn-lg btn-block"
                            name="thanhtoan"
                          >
                            Thanh toán
                          </button>
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
                          <p className="mt-3">
                            Vui lòng đăng nhập trước khi đặt đơn hàng.
                          </p>
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
