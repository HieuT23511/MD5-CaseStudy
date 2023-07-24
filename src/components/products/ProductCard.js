import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"

import { ToastContainer, toast, cssTransition } from 'react-toastify';
import { addToCart } from "../../redux/generalSlice";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});
const swirl = cssTransition({
    enter: "swirl-in-fwd",
    exit: "swirl-out-bck"
});

export function ProductCard({product}) {
    const dispatch = useDispatch();
    const { _id, name, oldPrice, price, image, category, isNew, description } = product;
    const handleAddToCart = (name) => {
        dispatch(addToCart({
            _id: _id, 
            name: name,
            image: image,
            price: price,
            quantity: 1,
            description: description
        }))
        toast.success(`${name} is added`, {transition: swirl})
    }
    return (
        <div className="mt-2 group border-gray-200/20 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-neutral-50 shadow-md">
            <Link to={`/products/${_id}`}>
                <a className="relative mx-3 mt-3 flex h-[300px] overflow-hidden rounded-xl">
                    <img className="peer absolute top-0 right-0 h-full w-full object-cover group-hover:scale-125 duration-500 shadow-inner" src={image} alt="product image" />
                    {isNew && <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>}
                </a>
            </Link>
            <div className="mt-4 px-5 pb-5 text-center">    
                <Link to={`/products/${_id}`}>
                    <a>
                        <h5 className="text-2xl font-bold text-center tracking-tight hover:text-blue-600 duration-75 text-black">{name}</h5>
                    </a>
                </Link>
                    <p className="text-black py-1">{category}</p>
                    <div className="pb-6">
                        <span className="text-xl font-bold text-black mr-1">{price.toLocaleString()}VNĐ</span>
                        <span className="text-sm text-gray-500 line-through ml-1">{oldPrice.toLocaleString()}VNĐ</span>
                </div>
                <button onClick={() => handleAddToCart(name)} className="w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                </button>
            </div>
            <ToastContainer
                position='top-right'
                autoClose = {3000}
                pauseOnHover={false}
                limit={5}
                transition={bounce}
            />
        </div>

    );
}