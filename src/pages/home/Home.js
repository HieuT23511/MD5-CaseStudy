import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Products } from "../../components/products/Products";

export default function Home() {
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className="mt-[112px]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
}
