import Navbar from "../../components/Navbar";
import {Outlet} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="bg-sky-100">
                <Outlet></Outlet>
            </div>
        </>
    )
}