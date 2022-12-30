import React from "react";
import { WishList, Comment, Logout } from "../../components/Icon";
const Account = () => {
    const NUMBER = [
        {
            id: 15
        }, {
            id: 16
        }, {
            id: 17
        }, {
            id: 18
        }
    ];
    const TAB_INFOMATION = 1;
    const TAB_ORDER = 2;
    const [tab, setTab] = React.useState(TAB_INFOMATION);
    const handleTab = (e, tab) => {
        e.preventDefault();
        setTab(tab);
    }
    return (
        <>
            <section id="account-Page" className="mt-3 mb-4">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="">
                            <div className="card">
                                <div className="card-header">
                                    Thông tin tài khoản
                                </div>
                                <div className="card-body">
                                    <div className="thumbs d-flex justify-content-center align-items-center mt-3">
                                        <div className="rounded-circle">
                                            <img src="https://via.placeholder.com/100" className="rounded-circle" alt="Image" />
                                        </div>
                                    </div>
                                    <h5 className="card-title text-center mt-3">AGL_Mạch Văn Hoàng (ホアン)</h5>
                                    <div className="mt-4 b-3">
                                        <ol className="list-group list-group-numbered list-items-tab">
                                            <li className={"list-group-item pt-3 pb-3 cursor-pointer " + (tab === TAB_INFOMATION ? 'active' : "")}><button className="tab-items tab-infomation" onClick={(e) => handleTab(e, TAB_INFOMATION)}>1.Thông tin cá nhân</button></li>
                                            <li className={"list-group-item pt-3 pb-3 cursor-pointer " + (tab === TAB_ORDER ? 'active' : "")}><button className="tab-items tab-order" onClick={(e) => handleTab(e, TAB_ORDER)}>2.Lịch sử đơn hàng</button></li>
                                        </ol>
                                    </div>
                                    <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
                                        <button className="btn-logout btn text-center fs-6">
                                            <span className="d-flex justify-content-center align-items-center">
                                                <Logout />&nbsp; Log out
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8  col-sm-12">
                        {tab && tab === TAB_INFOMATION && (
                            <div className="" id="private-infomations">
                                <div className="card">
                                    <div className="card-header">
                                        Thông tin cá nhân
                                    </div>
                                    <div className="card-body">
                                        <form className="form-infomations">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder={`AGL_Mạch Văn Hoàng (ホアン)`} />
                                                <small className="d-none text-color-red">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="(+84) 918 435 214" />
                                                <small className="d-none text-color-red">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="your-email@gmail.com" />
                                                <small className="d-none text-color-red">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******" />
                                                <small className="d-none text-color-red">We'll never share your email with anyone else.</small>
                                            </div>
                                            <button type="submit" className="btn btn-success d-flex">
                                                <span className="d-flex justify-content-center align-items-center">
                                                    <Logout />&nbsp; Update Infomations
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                        {tab && tab === TAB_ORDER && (<div className="" id="private-orders">
                            <div className="card">
                                <div className="card-header">
                                    Lịch sử đơn hàng
                                </div>
                                <div className="card-body">
                                    <ol className="list-group list-group-numbered list-order">
                                        {NUMBER.map((item, index) => {
                                            return (
                                                <li key={index} className="list-group-item pt-3 pb-3">
                                                    <div className="box-items d-flex justify-content-start">
                                                        <div className="thumbs">
                                                            <img src="https://via.placeholder.com/120" className="rounded-3" alt="Image" />
                                                        </div>
                                                        <div className="info ps-3">
                                                            <h5>Đậu hủ dồn thịt sốt cà chua</h5>
                                                            <p>Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí</p>
                                                            <div className="box-items d-flex justify-content-start">
                                                                <button className="btn-order me-2">25.000<sup>đ</sup></button>
                                                                <button className="btn-order">Chờ vận chuyển</button>
                                                                <button className="btn-order btn-wish-list text-decoration-none">
                                                                    <WishList /> Wish list
                                                                </button>
                                                                <button className="btn-order text-decoration-none">
                                                                    <Comment /> Comment
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </div>
                                <div className="cart-footer">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Account;
