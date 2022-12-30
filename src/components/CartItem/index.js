import { Trash, Minus, Plus } from "../../components/Icon";
const CartItem = (props) => {
    const { item } = props;
    return (
        <>
            <div className="form-row">
                <div className="pic-procart col-3 col-md-2">
                    <a className="text-decoration-none" href="#" target="_blank" title={item.name}>
                        <img src={item.image} alt={item.name} />
                    </a>
                    <a className="del-procart text-decoration-none" data-code="key_cart">
                        <span className="d-flex justify-content-center align-items-center"><Trash /> &nbsp; Xóa</span>
                    </a>
                </div>
                <div className="info-procart col-6 col-md-5">
                    <h3 className="name-procart"><a className="text-decoration-none" href="#" target="_blank" title={item.name}>{item.name}</a></h3>
                    <div className="properties-procart">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="quantity-procart col-3 col-md-2">
                    <div className="price-procart price-procart-rp">
                        <p className="price-new-cart load-price-new-key_cart">{item.price}</p>
                    </div>
                    <div className="quantity-counter-procart quantity-counter-procart-key_cart d-flex align-items-stretch justify-content-between">
                        <span className="counter-procart-minus counter-procart" data-type="minus">
                            <Minus />
                        </span>
                        <input type="number" className="quantity-procart" min="1" defaultValue="1" data-pid="73" data-code="key_cart" />
                        <span className="counter-procart-plus counter-procart" data-type="plus">
                            <Plus />
                        </span>
                    </div>
                </div>
                <div className="price-procart col-3 col-md-3">
                    <p className="price-new-cart load-price-new-key_cart">{item.price}</p>
                </div>
            </div>
        </>
    );
}
export default CartItem;