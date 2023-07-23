import { useState } from "react";
import { ProductCard } from "./ProductCard";

const productDemo = [
    { _id: 1, name: "gấu 1", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 2", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 3", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 4", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 5", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 6", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 7", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 8", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
    { _id: 1, name: "gấu 9", oldPrice: 500000, price: 350000, image: 'https://down-vn.img.susercontent.com/file/812db566a579eea563ba8ec40e8fed52', category: 'Gấu bông cỡ lớn', isNew: true, description: 'mô tả' },
]
export function Products() {
    const [products, setProducts] = useState(productDemo);
    return (
        <div className="py-10">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-6">
                {products.map((item, key) => {
                    return <ProductCard product = {item} key={key}/>
                })}
            </div>
        </div>
    );
}