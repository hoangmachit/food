import React from "react";

import ProductItem from "../../components/ProductItem";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function getProducts() {
      axios
        .get(`/data.json`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => console.log(error));
    }
    getProducts();
  }, []);
  /** Loading */
  const [loading, setLoading] = React.useState(false);
  const openLoading = () => {
    setLoading(true);
  }
  const closeLoading = () => {
    setLoading(false);
  }
  /** Toast */
  const [toast, setToast] = React.useState(false);
  const closeToast = () => {
    setToast(false);
  }
  const openToast = () => {
    setToast(true);
  }
  return (
    <>
      {loading && (<Loading />)}
      {toast && (<Toast closeToast={closeToast} />)}
      <section id="home-product">
        <div className="product__grid">
          {products &&
            products.map((item, index) => {
              return <ProductItem key={index} product={item} openLoading={openLoading} closeLoading={closeLoading} openToast={openToast} closeToast={closeToast} />;
            })}
        </div>
      </section>
    </>
  );
};
export default Home;
