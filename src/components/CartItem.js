import CloseIcon from '@mui/icons-material/Close';

export const CartItem = () => {

    return (
        <div className="w-2/3 pr-10">
            <div className="w-full ">
                <h2 className="font-titleFont text-2xl">Shopping cart</h2>
            </div>
            <div className="flex items-center justify-between gap-6 mt-6">
                <div className="flex items-center gap-2">
                    <CloseIcon className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                    <img src={''} className="w-32 h-32 object-cover" alt=""/>
                </div>
                <h2 className="w-52 ">title</h2>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                    <p className='text-base text-black'>Quantity</p>
                    <div className='flex items-center gap-4 text-sm font-semibold'>
                        <button
                            className='border text-black h-5 font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>-
                        </button>
                        <span>sl</span>
                        <button
                            className='border h-5 text-black font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>+
                        </button>
                    </div>
                </div>
                <p className="w-10">$</p>
            </div>
            <button className='text-xl font-bold  bg-red-500 text-white py-1 ml-6 px-6 mt-8'>Reset Cart</button>
        </div>
    )
}
