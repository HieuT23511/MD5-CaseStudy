import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/admin/Sidebar";

export default function AdminHome() {
    return (
        <>
            <Header />
            <div className="flex mt-[101px]">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    <Outlet />
                </div>
            </div>
        </>
    );
}