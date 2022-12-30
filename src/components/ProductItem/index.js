import { Cart } from "../Icon";
const ProductItem = (props) => {
  const { product, openLoading, closeLoading, openToast } = props;
  const addToCart = () => {
    openLoading();
    setTimeout(function () {
      closeLoading();
      openToast();
    }, 1000)

  }
  return (
    <article className="box-product">
      <div className="box-product__wrap">
        <div className="box-product__wrap-thumbs">
          <a href={product.slug} title={product.title}>
            <figure>
              <img className="lazy" alt={product.title} src={product.image} />
            </figure>
          </a>
        </div>
        <div className="box-product__wrap-info">
          <a href={product.slug} title={product.title}>
            <h3>{product.title}</h3>
          </a>
        </div>
        <div className="price-product">
          <div className="price-regular">
            <span>480.000đ</span>
          </div>
        </div>
        <div className="start-product">
          <div className="comment-star">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>
        <div className="add-cart-product">
          <button
            className="cart-add addcart"
            data-id={product.id}
            onClick={() => addToCart()}
          >
            <Cart />
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </article>
  );
};
export default ProductItem;
