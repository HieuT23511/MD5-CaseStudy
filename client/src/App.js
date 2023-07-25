import './App.css';
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AddProduct from "./pages/products/AddProduct";
import { ProductDetail } from './pages/products/ProductDetail';
import About from "./pages/home/About";
import ListProduct from './pages/products/ListProduct';
import {Cart} from "./pages/cart/cart";
import AdminHome from './pages/admin/AdminHome';
import Table from './components/admin/Table';
import Modal from './components/admin/Modal';

function App() {
    return (
        <>
            <Routes>
                <Route path={'/login'} element={<SignIn />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/'} element={<Home />}>
                    <Route path={'/'} element={<ListProduct />}></Route>
                    <Route path={'/products/:id'} element={<ProductDetail />}></Route>
                    <Route path={'/add-product'} element={<AddProduct />}></Route>
                    <Route path={'/about'} element={<About />}></Route>
                    <Route path={'/cart'} element={<Cart />}></Route>
                </Route>
                <Route path='/admin' element={<AdminHome />}>
                    <Route path={'/admin/products'} element={<Table />}></Route>
                    <Route path={'/admin/modal'} element={<Modal />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
