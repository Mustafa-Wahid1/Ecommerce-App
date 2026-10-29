import React from "react";
import { CheckCircle } from "lucide-react";

const OrderPlase = ({setOrderPlaced, setCart}) => {

  const handleClose = () => {
      setCart([]); 
    localStorage.removeItem("cart"); 
    setOrderPlaced(false);
  window.location.reload();
};
    const placeOrderClose = () => {
        setOrderPlaced(false);
    }
  return (
    <section className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl animate-[fadeIn_.3s_ease]">

        <CheckCircle
          size={70}
          className="mx-auto mb-4 text-green-500"
        />

        <h1 className="text-3xl font-bold text-gray-800">
          Order Placed!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <button

          className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
       onClick={() => {
  placeOrderClose();
  handleClose();
}}>
          Close
        </button>

      </div>
    </section>
  );
};

export default OrderPlase;