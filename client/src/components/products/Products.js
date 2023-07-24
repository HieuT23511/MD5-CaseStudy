import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const productDemo = [
    { _id: 1, name: "gấu 1", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 2, name: "gấu 2", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 3, name: "gấu 3", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 4, name: "gấu 4", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 5, name: "gấu 5", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 6, name: "gấu 6", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 7, name: "gấu 7", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 8, name: "gấu 8", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 9, name: "gấu 9", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
]
export function Products() {
    const [products, setProducts] = useState(productDemo);
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">shopping everyday</h1>
                <span className="w-20 h-3 bg-black"></span>
                <p className="max-w-[700px] text-gray-600 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-6">
                {products.map((item, key) => {
                    return <ProductCard product={item} key={key} />
                })}
            </div>
        </div>
    );
}