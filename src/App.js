import './App.css';
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListProduct from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<SignIn/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/home'} element={<Home/>}>
                    <Route path={''} element={<ListProduct/>}></Route>
                    <Route path={'add-product'} element={<AddProduct/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
