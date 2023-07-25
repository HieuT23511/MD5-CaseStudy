import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { productDemo } from '../../components/products/Products';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import { addToCart } from '../../redux/generalSlice';
import axios from 'axios';

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});
const swirl = cssTransition({
    enter: "swirl-in-fwd",
    exit: "swirl-out-bck"
});

export function ProductDetail() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const [details, setDetails] = useState({});
    let [baseQty, setBaseQty] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/detail/${id}`).then((res) => {
            const product = res.data.product;
            if (product) {
                setDetails({...product})
            }
        })
    }, [])

    const handleSetQuantity = (type) => {
        type === 'add' ? setBaseQty(baseQty + 1) : setBaseQty(baseQty > 1 ? baseQty - 1 : 1);
    }

    const handleAddToCart = (nameProduct) => {
        dispatch(addToCart({
            _id: details._id, 
            name: details.name,
            image: details.image,
            price: details.price,
            quantity: baseQty,
            description: details.description
        }))
        toast.success(`${nameProduct} is added`, { transition: swirl })
    }

    return (
        <section class="py-16">
            <div className='container px-4 mx-auto'>
                <div className='max-w-screen-xl mx-auto lg:max-w-6xl'>
                    <div className='flex flex-wrap -mx-4 mb-12'>
                        <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                            <div class="lg:w-112">
                                <div className='relative overflow-hidden rounded-2xl cursor-pointer'>
                                    <img className="h-[550px] w-full object-cover hover:scale-125 duration-500 shadow-inner" src={details.image} alt="product image" />
                                    {details.isNew && <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>}
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 px-4'>
                            <div className='ml-5 max-w-lg'>
                                <h2 className='text-4xl font-black mb-1'>{details.name}</h2>
                                <span class="block text-sm font-bold mb-5 mt-">{details.category}</span>
                                <div className='flex items-center mb-4'>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z" fill="#f79839"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z" fill="#f79839"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z" fill="#f79839"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z" fill="#f79839"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57429 0.42926 9.19098 0.682715 9.02267 1.07518L6.74005 6.41696L0.966583 6.94112C0.542377 6.98033 0.184092 7.26705 0.0524051 7.67203C-0.0792816 8.07701 0.0423341 8.5212 0.363235 8.80121L4.7266 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85249 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.342 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203Z" fill="#E8E8F8"></path>
                                            <defs><rect width="20" height="20" fill="white"></rect></defs>
                                        </svg>
                                    </button>
                                </div>
                                <span class="block text-2xl font-black mb-4">{(details.price ? details.price.toLocaleString() : '0')} VNĐ</span>
                                <div className='min-h-[160px]'>
                                    <p class="font-bold mb-2">{details.description}</p>
                                </div>
                                <div class="flex flex-wrap mb-4">
                                    <div class="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                                        <span class="block text-sm font-black mb-2">Số Lượng</span>
                                        <div class="flex h-12 w-24 px-2 items-center justify-between border-2 border-black rounded-md">
                                            <button onClick={() => handleSetQuantity('minus')} class="flex w-5 h-5 px-px items-center justify-center bg-white hover:bg-sky-500 rounded transition duration-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                                </svg>
                                            </button>
                                            <p class="w-10 text-center text-lg font-bold  text-black">{baseQty}</p>
                                            <button onClick={() => handleSetQuantity('add')}  class="relative flex w-5 h-5 px-px py-px items-center justify-center bg-white hover:bg-sky-500 rounded transition duration-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="w-full sm:w-auto">
                                        <span class="block text-sm font-black mb-2">Kích Cỡ</span>
                                        <div class="group relative h-12 w-32 border-2 border-black rounded-md overflow-hidden">
                                            <select class="cursor-pointer w-full h-full px-4 text-sm font-bold appearance-none outline-none" name="" id="">
                                                <option value="1">Nhỏ</option>
                                                <option value="2">Trung Bình</option>
                                                <option value="3">Lớn</option>
                                            </select>
                                            <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
                                                <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6 mt-6">
                                    <div class="flex-grow-1 w-full px-2 mb-4">
                                        <button onClick={() => handleAddToCart(details.name)} class="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 rounded-md">
                                            <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                                                <div class="flex h-full w-full items-center justify-center border-2 border-black border-b-4 border-r-4 rounded-md" style={{ backgroundColor: '#A8FD39' }}>
                                                    <span class="text-base font-black text-black">Add to Cart</span>
                                                </div>
                                            </div>
                                        </button>
                                        <ToastContainer
                                            position='top-right'
                                            autoClose={3000}
                                            pauseOnHover={false}
                                            limit={5}
                                            transition={bounce}
                                        />
                                    </div>
                                    <div class="w-auto px-2 mb-4">
                                        <Link to={`/`}>
                                            <a class="inline-flex items-center justify-center w-12 h-12 text-black hover:text-indigo-500 border-2 border-black hover:border-indigo-500 rounded-md transition duration-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}