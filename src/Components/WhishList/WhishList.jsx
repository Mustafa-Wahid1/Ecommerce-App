import React from 'react'
// import boy3 from '../../assets/boy3.png'
import Product from '../Products/Product'
import { products } from '../Products/Products'

const WhishList = ({ activepanel, handelclose, Wishlist, AddCart,clearWishlist }) => {
  return (
    <>
      {/* Cart */}
      <div className={`flex flex-col justify-between gap-1   bg-zinc-100 fixed top-0 bottom-0 
     right-0 z-40 left-auto w-[330px] py-8 border-l border-zinc-300 transform  transition-transform duration-300
         ${activepanel === 'WhishList' ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Heading */}
        <div>
          <h3 className='text-4xl text-zinc-700 text-center font-medium '>
            Your WhishList
          </h3>
        </div>

        {/* Cart-items */}
        <div className="flex-1 flex flex-col gap-2 mt-5 overflow-y-auto scroll">
          {
          Wishlist.length === 0 ?
            (<div className="flex flex-col items-center justify-center h-full">
                <p className='text-zinc-700 text-lg font-medium'>Your Whishlist is empty</p>
              </div>)
            :
            (
            Wishlist.map((Product, index) =>{
              return (<div className={`flex items-center gap-3 px-5 py-2 border-y-1 border-zinc-300
                  ${index %2 === 0 ? 'bg-blue-100': 'bg-white'}`} >
                {/* cart img */}
                <div className="w-20 h-20 bg-zinc-100 border-1 border-zinc-300 rounded-2xl">
                  <img src={Product.image} className=' rounded-2xl w-full h-full object-contain' />
                </div>

                {/* product detail */}
                <div className='flex-2'>
                  <div className='flex justify-between'>
                    <div className="text-[13px]">{Product.name}</div>
                  </div>
                  {
                    Product.onSale &&
                    (
                      <span className="text-zinc-600 line-through text-[10px] px-1">${Product.oldPrice.toFixed(2)}</span>
                    )
                  }
                  <span className="text-red-600 text-[13px] ">${Product.price.toFixed(2)}</span>
                </div>
                <div className="mb-2">
                </div>
                 {/* Date + Button */}
  <div className="flex flex-col items-center gap-2">
    <p className=" text-gray-500 text-[10px]">{Product.AddDate}</p>

    <button
      className="bg-blue-600 text-white rounded-2xl px-2 py-1 text-[10px] hover:bg-blue-700 active:bg-blue-800 active:scale-95 transition cursor-pointer"
     onClick={() => AddCart(Product)}
    >
      Add to Cart
    </button>
  </div>
     
              </div>)

            }))
           
          }
        </div>



        {/* Buttons */}
        <div className="flex gap-x-5 p-5 ">
          <button onClick={handelclose} className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 
                        rounded-2xl transition hover:bg-blue-700 active:scale-95'>Close</button>
          <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 
                        rounded-2xl' onClick={(clearWishlist)}>  Clear All</button>
        </div>
      </div>
    </>
  )
}

export default WhishList