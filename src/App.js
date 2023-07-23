import './App.css';
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListProduct from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import { ProductDetail } from './pages/products/ProductDetail';
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/login'} element={<SignIn/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/'} element={<Home/>}>
                    <Route path={''} element={<ListProduct/>}></Route>
                    <Route path={'/products/:id'} element={<ProductDetail/>}></Route>
                    <Route path={'/add-product'} element={<AddProduct/>}></Route>
                    <Route path={'/about'} element={<About/>}></Route>
                    <Route path={'/contact'} element={<Contact/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
