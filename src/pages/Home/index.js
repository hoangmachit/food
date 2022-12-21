import React from "react";

import ProductItem from "../../components/ProductItem";
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
  return (
    <>
      <section id="home-product">
        <div className="container">
          <div className="product__grid">
            {products &&
              products.map((item, index) => {
                return <ProductItem key={index} product={item} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
