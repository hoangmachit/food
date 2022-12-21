import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
const Default = () => {
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <Navbar />
      <main id="main">
        <Slider />
        <Outlet />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};
export default Default;
