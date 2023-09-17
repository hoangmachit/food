import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layouts/AdminLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from "./pages/Home";
import AdminHome from "./pages/Admin/Home";
import AdminProduct from "./pages/Admin/Product";
import AdminOrder from "./pages/Admin/Order";
import AdminConfig from "./pages/Admin/Config";
import AdminCustomer from "./pages/Admin/Customer";
import AdminProductDetail from "./pages/Admin/ProductDetail";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
                    <Route path="/admin/order" element={<AdminOrder />} />
                    <Route path="/admin/product" element={<AdminProduct />} />
                    <Route path="/admin/product/:productId" element={<AdminProductDetail />} />
                    <Route path="/admin/customer" element={<AdminCustomer />} />
                    <Route path="/admin/config" element={<AdminConfig />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
