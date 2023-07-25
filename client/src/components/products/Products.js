import { useState,useEffect } from "react";
import { ProductCard } from "./ProductCard";
import axios from 'axios'

export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/list').then((res) => {
            let productList = res.data.productList
            setProducts([...productList])
        })
    }, [])
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