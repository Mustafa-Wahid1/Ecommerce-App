import React, { useState } from "react";
import { products } from "./Products";
import { IoIosHeart } from "react-icons/io";

const Product = ({ searchterm, AddCart, Addtowhishlist, Wishlist, setOpen, setSelectedProduct }) => {
  // categories
  const [activetab, setactivetab] = useState("All");
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];
  //  products-filter
  const filterlists = products.filter(item => {
    const matchCategroy =
      (activetab === 'All') ||
      (activetab === 'New Arrivals' && item.newArrival) ||
      (activetab === 'On Sale' && item.onSale) ||
      (activetab === item.category)

    const matchesearch = item.name.toLowerCase().includes(searchterm.toLowerCase());

    return matchCategroy && matchesearch;
  })

  const renderproducts = filterlists.map((product) => {
    return (
      //  product-card
      <div key={product.id} className="border-2 border-zinc-100 rounded-2xl p-1 ">
        <div className="bg-zinc-100 w-[43vh] h-[45vh] rounded-2xl p-2">
          <div className="flex items-center justify-between ">
            <button className={`text-3xl  cursor-pointer
                   ${ Wishlist.some(item => item.id === product.id)?
                    'text-red-600' : 'text-zinc-300'
                   }`}
              onClick={() => Addtowhishlist(product)}>
              <IoIosHeart  />
            </button>

            <div>
              {
                (product.onSale || product.newArrival) && (
                  <span className={`px-3 py-1 text-white rounded-full
              ${product.onSale ? 'bg-red-600 ' : 'bg-green-600'}`}>
                    {
                      product.onSale ? 'Sale' : 'New'
                    }

                  </span>
                )
              }
            </div>
          </div>

          <div className=" bg-zinc-100w-full h-[40vh] mt-3 mb-2 object-cover  transition-transform duration-500 hover:scale-105 ">
          <img
  className="w-full h-[35vh] cursor-pointer"
  src={product.image}
  alt={product.name}
  onClick={() => {
    setSelectedProduct(product);
    setOpen(true);
  }}
/>
          </div>
        </div>
        <div className="text-center mt-5 ">
          <div className="text-[1.1rem]">{product.name}</div>
          <div className="mb-2">
            {
              product.onSale &&
              (
                <span className="text-zinc-600 line-through mr-5 ">${product.oldPrice.toFixed(2)}</span>
              )
            }
            <span className="text-red-600 ">${product.price.toFixed(2)}</span>
          </div>
          <button
            className="bg-blue-600 text-white w-full rounded-full text-[3.5vh] cursor-pointer active:bg-blue-800 py-2 mb-2
            transition hover:bg-blue-700 active:scale-95"  onClick={() => AddCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    //  section-button
    <section id="product-section" className=" mx-auto p-12 py-10 ">
      <div className="flex justify-center items-center gap-3 ">
        {categories.map((Category) => {
          return (
            <button
              key={Category}
              className={` px-8 py-2 rounded-full text-lg cursor-pointer
                    ${activetab === Category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"}`}
              onClick={() => setactivetab(Category)}
            >
              {Category}
            </button>
          );
        })}
      </div>
      {/* render-product */}
      <div className="grid grid-cols-4 gap-9 mt-10 ">
        {
          filterlists.length === 0 ?
            <p className="text-center col-span-4 text-red-600 text-lg">Product is Not Found</p>
            :
            renderproducts
        }
      </div>
    </section>
  );
};

export default Product;
