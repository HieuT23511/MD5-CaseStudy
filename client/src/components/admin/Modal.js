import React, {useState} from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/firebase";
const Modal = ({ isOpen, onClose, select }) => {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const  handleChange = (event) =>{
        setFile(event.target.files[0]);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };


    if (!isOpen) return null;
    return (
        <>
            <div className="opacity-10 inset-0 fixed z-40 bg-black"></div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="bg-white p-8 rounded-lg shadow-sm relative overflow-hidden">
                    <div className='absolute right-0 top-0'>
                        <button className="p-1 cursor-pointer border-none" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">{select === -1 ? 'Thêm Sản Phẩm' : 'Cập Nhật Sản Phẩm'}</h2>
                    <form class="space-y-6 w-[800px]" action="" method='post'>
                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <div className=' text-left mt-2'>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Sản Phẩm</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nhập tên" required />
                                </div>
                                <div className='text-left mt-2'>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại Sản Phẩm</label>
                                    <select id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className='text-left mt-2'>
                                    <label for="oldPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá Cũ</label>
                                    <input type="text" name="oldPrice" id="oldPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nhập giá cũ" required />
                                </div>
                                <div className='text-left mt-2'>
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá Mới</label>
                                    <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nhập giá mới" required />
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='text-left mt-2'>
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                                    <textarea type="text" name="description" id="description" rows="5" cols="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div className='text-left mt-2'>
                                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ảnh</label>
                                    <input type="file" name="image" id="image" onChange={handleChange} accept="/image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nhập URL Ảnh" required />
                                    <p>{percent} "% done"</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleUpload} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {select === -1 ? 'Thêm' : 'Cập Nhật'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;