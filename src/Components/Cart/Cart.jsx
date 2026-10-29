import React from 'react'
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const Cart = ({ activepanel, handelclose, cart, removeItem, quantityIncrease, quantityDecrease, subtotal, shippingfee, orderTotal, setOrderSummary }) => {

  return (
    <>
      {/* Cart / */}
      <div className={` flex flex-col justify-between gap-1  bg-zinc-100 fixed top-0 bottom-0 
     right-0 z-40 left-auto w-[330px] py-5 border-l border-zinc-300 transform  transition-transform duration-300
         ${activepanel === 'Cart' ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Heading */}
        <div>
          <h3 className='text-4xl text-zinc-700 text-center font-medium '>
            Your Cart
          </h3>
        </div>

        {/* Cart-items */}
        <div className="flex-1 flex flex-col mt-3 gap-2 overflow-y-auto scroll">
          {
            cart.length === 0 ? (
              (<div className="flex flex-col items-center justify-center h-full">
                <p className='text-zinc-700 text-lg font-medium'>Your cart is empty</p>
              </div>)
            ) : (
              cart.map((product,index) => (
                <div className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300
                ${index % 2 === 0 ? 'bg-blue-100': 'bg-white'}`} key={product.id}>
                  {/* cart img */}
                  <div className="w-20 h-20 bg-zinc-100 border-1 border-zinc-300 rounded-2xl">
                    <img src={product.image} className=' rounded-2xl w-full h-full object-contain' />
                  </div>

                  {/* product detail */}
                  <div className='flex-1'>
                    <div className='flex justify-between'>
                      <h4 className='text-[12px]'>{product.name}</h4>
                      <button className='h-6 w-6 bg-red-600 rounded-full text-white flex justify-center items-center active:bg-red-700 cursor-pointer mr-5 mb-2' onClick={() => removeItem(product.id)}>
                        < FaTrashAlt size={13} />
                      </button>
                    </div>
                    <div className='flex justify-between'>
                      {
                        product.onSale &&
                        (
                          <span className="text-zinc-600 line-through text-[13px] ">${product.oldPrice.toFixed(2)}</span>
                        )
                      }
                      <span className="text-red-600 text-[14px] ">${product.price.toFixed(2)}</span>
                      <div className='flex gap-2'>
                        <button className='h-5 w-5 bg-blue-600 rounded-full text-white flex justify-center items-center active:bg-blue-700 cursor-pointer'
                          onClick={() => quantityDecrease(product)}>
                          <FaMinus size={10} />
                        </button>
                        <span>{product.quantity}</span>
                        <button className='h-5 w-5 bg-blue-600 rounded-full text-white flex justify-center items-center active:bg-blue-700 cursor-pointer'
                          onClick={() => quantityIncrease(product)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>




        {/* cart-total */}
        <div className="px-7 border-y border-zinc-300 pt-2">
          <div className="flex justify-between ">
            <span className='text-zinc-800'>SubTotal</span>
            <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className='text-zinc-800'>Shiping & Handlings</span>
            <span className='text-zinc-800'>${shippingfee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-zinc-300">
            <span className='text-blue-600 font-medium'>Order Total</span>
            <span className='text-blue-600 font-medium'>${orderTotal.toFixed(2)}</span>
          </div>
        </div>


        {/* Buttons */}
        <div className="flex gap-x-5 px-7 py-1 mt-2">
          <button onClick={handelclose} className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 
                    rounded-2xl transition hover:bg-blue-700 active:scale-95'>Close</button>
          <button className={` text-white flex-1 h-[7vh] rounded-2xl
            ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 cursor-pointer active:bg-blue-700 transition hover:bg-blue-700 active:scale-95'}`} disabled={cart.length === 0}
             onClick={() => setOrderSummary(true)}>
            CheckOut
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart