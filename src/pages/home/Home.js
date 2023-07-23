import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
}
