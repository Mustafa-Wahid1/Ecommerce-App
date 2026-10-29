import { useState, useEffect, useCallback } from "react";
import { HiX, HiOutlineShoppingBag } from "react-icons/hi";

const ProductModal = ({
  isOpen,
  onClose,
  product = {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    name: "Premium Wireless Headphones",
    price: "249.00",
    description:
      "Experience studio-quality sound with industry-leading noise cancellation, 30-hour battery life, and a lightweight, all-day comfortable design crafted from premium materials.",
  },
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity);
    onClose?.();
  };

  if (!isOpen) return null;

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 font-[Inter,sans-serif]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-[fadeIn_0.25s_ease-out]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-md ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:bg-gray-900 hover:text-white hover:scale-105 active:scale-95"
        >
          <HiX className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 sm:p-8 md:p-10">
          {/* Left: Image */}
          <div className="flex items-center justify-center rounded-3xl bg-gray-50 p-6 sm:p-10 min-h-[280px] md:min-h-[420px]">
            <img
              src={product.image}
              alt={product.title}
              className="h-full max-h-[380px] w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center">
            <h2
              id="product-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug"
            >
              {product.name}
            </h2>

            <p className="mt-3 text-2xl sm:text-3xl font-bold text-emerald-600">
              ${product.price}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-gray-500">
              {product.description}
            </p>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 py-4 text-base font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-200 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 active:scale-[0.98]"
            >
              <HiOutlineShoppingBag className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
