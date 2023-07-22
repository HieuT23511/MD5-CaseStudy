import './App.css';
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListProducts from "./pages/home/products/ListProducts";
import AddProducts from "./pages/home/products/AddProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<SignIn/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/home'} element={<Home/>}>
                    <Route path={''} element={<ListProducts/>}></Route>
                    <Route path={'add-product'} element={<AddProducts/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
