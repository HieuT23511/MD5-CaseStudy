import './App.css';
import ResponsiveAppBar from "./components/Navbar";
import SignIn from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<SignIn/>}></Route>
                <Route path={'/register'} element={<Register/>}></Route>
            </Routes>
        </>
    );
}

export default App;
