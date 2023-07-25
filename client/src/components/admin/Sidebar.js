import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="fixed top-[101px] bg-gray-100 min-h-screen w-1/5">
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">
                <div className="bg-top bg-cover space-y-1">
                    <Link to={'/admin'}>
                        <a className="font-medium text-sm items-center text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                            <span className="items-center justify-center flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className="ml-5 text-base">Dashboard</span>
                            </span>
                        </a>
                    </Link>
                    <ul>

                    </ul>
                    <Link to={'/admin/products'}>
                        <a className="font-medium text-sm items-center text-gray-900 px-4 py-2.5 block
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                            <span className="items-center justify-start flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                <span className="ml-5 text base">Product</span>
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default Sidebar;




