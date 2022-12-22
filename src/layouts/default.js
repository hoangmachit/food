import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Default = () => {
  return (
    <>
      <section>
        <div className="container">
          <header id="header">
            <Header />
          </header>
          <main id="main">
            <Outlet />
          </main>
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </section>
    </>
  );
};
export default Default;
