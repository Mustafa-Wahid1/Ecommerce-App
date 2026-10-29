import React from 'react'

const OrderSummery = ({ cart, subtotal, shippingfee, orderTotal, setOrderPlaced, setOrderSummary }) => {

        const OrderSummaryClose = () => {
       setOrderSummary(false);
    }

    const handleplaceOrder = () => {
        setOrderSummary(false);
        setOrderPlaced(true);
    }
    return (
        <>
            <section className='flex justify-center items-center bg-black/80 fixed inset-0 z-40'>
                <div className="bg-zinc-100 w-[500px] px-5 py-5 rounded-2xl contain-content ">
                    <h2 className='text-3xl text-shadow-zinc-700 font-medium  text-center'>Order Summary</h2>
                    <div>
                        <div>
                            {
                                cart.map(item => (
                                    <div key={item.id} className='flex justify-between items-center mt-3 border-b-1 border-zinc-300'>
                                        <span className='text-zinc-600 py-2'>
                                            {item.name} (x {item.quantity} )
                                        </span>
                                        <span className='text-zinc-600 py-2'>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))
                            }

                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span className='text-zinc-700'>SubTotal</span>
                            <span className='text-zinc-700'>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between py-2'>
                            <span className='text-zinc-700'>Shipping & Handling</span>
                            <span className='text-zinc-700'>${shippingfee.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between pt-3 border-t-1 border-zinc-400'>
                            <span className='text-blue-500 text-2xl font-medium'>Order Total</span>
                            <span className='text-blue-500 text-2xl font-medium'>${orderTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='flex gap-x-3 mt-5'>
                        <button className='bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg cursor-pointer transition hover:zinc-blue-700 active:scale-95'
                        onClick={OrderSummaryClose} >
                            Cencel
                        </button>
                        <button className='bg-blue-500 flex-1 py-3 active:bg-blue-700 text-white rounded-lg cursor-pointer transition hover:bg-blue-700 active:scale-95 '
                            onClick={handleplaceOrder}>
                            Place Order
                        </button>

                    </div>

                </div>
            </section>
        </>
    )
}

export default OrderSummery