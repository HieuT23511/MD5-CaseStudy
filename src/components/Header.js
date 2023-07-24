import { Link } from "react-router-dom";
import { FE2DIE } from "../assests/index.jsx";
import FontAwesomeIcon from "react"
export default function Header() {
    return (
        <>
            <div className="z-50 w-full h-30 bg-white border-b-[1px] z-index-1 fixed top-0 border-b-gray-800 font-titleFont ">
                <div className='max-w-screen-xl flex items-center justify-between'>
                    <Link to='/'>
                        <div>
                            <img src={FE2DIE} alt="Logo" className='w-28 ml-[35px]' />
                        </div>
                    </Link>
                    <div className="flex gap-5 items-center">
                        <ul className='flex items-center gap-8 cursor-pointer'>
                            <Link to={'/'}><li className=' text-black font-bold hover:text-blue-500 hover:underline'>Home</li></Link>
                            <Link to={'/add-product'}><li className=' text-black font-bold hover:text-blue-500 hover:underline'>Create</li></Link>
                            <Link to={'/about'}><li className=' text-black font-bold hover:text-blue-500 hover:underline'>About</li></Link>
                            <Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg></Link>
                            <Link to={'/login'}><li className=' text-black font-bold hover:text-blue-500 hover:underline'>Login</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}