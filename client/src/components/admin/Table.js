import { useEffect, useState } from "react";
import { productDemo } from "../products/Products";
import { Link } from "react-router-dom";
import Modal from "./Modal";



export default function Table() {
    const [products, setProducts] = useState(productDemo);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indexSelect, setIndexSelect] = useState(-1);
    useEffect(() => {

    }, []);

    const handleAdd = () => {
        setIndexSelect(-1);
        setIsModalOpen(true);
    }

    const handleUpdate = (idUpdate) => {
        setIndexSelect(idUpdate);
        setIsModalOpen(true);
    };

    const handleDelete = (idProduct) => {
        let listProduct = products.filter(item => item._id !== idProduct);
        setProducts([...listProduct])
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmitForm = () => {
        setIndexSelect(-1);
        setIsModalOpen(false);
    }

    return (
        <div className="mx-10">
            <div className="mt-5">
                <button onClick={handleAdd} className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 font-bold text-white">
                    Thêm Sản Phẩm
                </button>
            </div>
            <div class="flex flex-col mt-5">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="border rounded-lg overflow-hidden dark:border-gray-700">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <caption className=" caption-top py-4">
                                    <div className="flex justify-around leading-[42px] mx-3">
                                        <div className="w-1/3 flex justify-start">
                                            <p>Tổng: {products.length > 0 ? products.length : 0} Sản Phẩm</p>
                                        </div>
                                        <p className="w-1/3 font-bold text-2xl text-center leading-[42px]">Product Manager</p>
                                        <div className="w-1/3 flex justify-end">
                                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Tìm Kiếm..."/>
                                        </div>
                                    </div>
                                </caption>
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-center px-2 py-3 text-xs font-medium text-gray-500 uppercase">STT</th>
                                        <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase">Ảnh</th>
                                        <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase">Tên SP</th>
                                        <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase">Giá</th>
                                        <th scope="col" class="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase">Lựa Chọn</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {products.length > 0 && products.map((product, index) => {
                                        return (
                                            <tr>
                                                <td class="text-center px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{index}</td>
                                                <td class="text-center px-6 py-4 whitespace-nowrap flex justify-center text-sm text-gray-800 dark:text-gray-200">
                                                    <img className="h-[80px] w-[80px] object-cover group-hover:scale-125 duration-500 shadow-inner" src={product.image} alt="product image" />
                                                </td>
                                                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                    <Link to={`/products/${product._id}`}>
                                                        {product.name}
                                                    </Link>
                                                </td>
                                                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{(product.price).toLocaleString()}</td>
                                                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex justify-center">
                                                        <button onClick={() => handleUpdate(product._id)} class="text-blue-500 hover:text-blue-700 mr-3 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                            </svg>
                                                        </button>
                                                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} submitForm={handleSubmitForm} select = {indexSelect}/>
                                                        <button onClick={() => handleDelete(product._id)} class="text-blue-500 hover:text-blue-700 ml-3 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}