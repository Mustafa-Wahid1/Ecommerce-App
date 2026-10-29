import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import Cart from '../Cart/Cart'
import WhishList from "../WhishList/WhishList";
import OrderSummery from "../OrderSummery/OrderSummery";
import OrderPalce from '../OrderPlace/OrderPlase'
import { products } from "../Products/Products";
import ProductModal from "../ProductModal/ProductModal"

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  //  scroolNavbar
  const [isScroold, setisScroold] = useState(false)
  // Searchfilter
  const [searchterm, setsearchterm] = useState('');
  // cart & whislist show panel function
  const [activepanel, setactivepanel] = useState(null)
  // order summary
  const [OrderSummary, setOrderSummary] = useState(false)
  // order Place
  const [OrderPlaced, setOrderPlaced] = useState(false)
  // addtoCart 
  const [cart, setCart] = useState(() => {
    const storecart = localStorage.getItem('cart')
    return storecart ? JSON.parse(storecart) : []
  });
  // whislist
  const [Wishlist, setWishlist] = useState([])



  useEffect(() => {
    const changeNavbar = () => {
      setisScroold(window.scrollY > 5)
    }
    window.addEventListener('scroll', changeNavbar)
  })

  // save items to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  })



  const handelpanel = (tabName) => {
    setactivepanel(prev => (
      prev === tabName ? null : tabName
    ))
  }

  // cart & whislist close panel function
  const handelclose = () => {
    setactivepanel(null)
  }

  // addtoCart function

  const AddCart = (product) => {

    const isproductExist = cart.find((item) => item.id === product.id);
    if (isproductExist) {
      alert('Item is already in the cart');
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }])
  }

  // whislist function
  const Addtowhishlist = (product) => {
    const inInwhishlist = Wishlist.some(item => item.id === product.id);

    if (inInwhishlist) {
      setWishlist(Wishlist.filter(item => item.id !== product.id));
    } else {
      const AddDate = new Date().toLocaleString('en-GB');

      setWishlist([
        ...Wishlist,
        {
          ...product,
          AddDate,
        },
      ]);
    }
  };
  // clear wishlist
  const clearWishlist = () => {
    setWishlist([]);
  }

  // quantity Increase
  const quantityIncrease = (product) => {
    setCart(cart.map((item) =>
      item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : item));
  }

  // quantity decrease
  const quantityDecrease = (product) => {
    setCart(cart.map((item) =>
      item.id === product.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item));
  }

  // remove Item
  const removeItem = (productId) => {
    setCart((crat => cart.filter((item) => item.id !== productId)))
  }

  // total calculation
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingfee = totalItems * 2;
  const orderTotal = subtotal + shippingfee;

  // handalscrool
  const handalscrool = () => {
    const section = document.getElementById('product-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar
          isScroold={isScroold}
          handalscrool={handalscrool}
          setsearchterm={setsearchterm}
          handelpanel={handelpanel}
          totalItems={totalItems}
          Wishlist={Wishlist} />

        {/* Banner */}
        <Banner />

        {/* Product */}
        <Product
          searchterm={searchterm}
          AddCart={AddCart}
          Addtowhishlist={Addtowhishlist}
          Wishlist={Wishlist}
          setOpen={setOpen}
          setSelectedProduct={setSelectedProduct} />

        {/* Cart */}
        <Cart
          activepanel={activepanel}
          handelclose={handelclose}
          cart={cart}
          removeItem={removeItem}
          quantityIncrease={quantityIncrease}
          quantityDecrease={quantityDecrease}
          subtotal={subtotal}
          shippingfee={shippingfee}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary} />

        {/* whishlist */}
        <WhishList
          activepanel={activepanel}
          handelclose={handelclose}
          Wishlist={Wishlist}
          AddCart={AddCart}
          clearWishlist={clearWishlist} />

        {/* OrderSummery  */}
        {
          OrderSummary &&
          <OrderSummery
            cart={cart}
            subtotal={subtotal}
            shippingfee={shippingfee}
            orderTotal={orderTotal}
            setOrderSummary={setOrderSummary}
            setOrderPlaced={setOrderPlaced}

          />
        }

        {/* OrderPlase */}
        {
          OrderPlaced &&
          <OrderPalce
            setOrderPlaced={setOrderPlaced}
            setCart={setCart}
          />
        }

        <ProductModal
          isOpen={open}
          onClose={() => setOpen(false)}
          product={selectedProduct}
              onAddToCart={AddCart}
        />
      </div>
    </>
  );
};

export default Home;
