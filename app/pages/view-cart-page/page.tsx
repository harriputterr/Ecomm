import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const CartItem = ({ productName, productPrice, quantity, imageUrl }: any) => (
  <div className="flex items-center justify-between p-4 font-light">
    <img src={imageUrl} alt={productName} className="w-20 h-20 object-cover" />
    <span className="">{productName}</span>
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 border">-</button>
      <span>{quantity}</span>
      <button className="px-2 py-1 border">+</button>
    </div>
    <span>{`C$${productPrice * quantity}.00`}</span>
    <button className="text-gray-500 hover:text-gray-700">✕</button>
  </div>
);

const Cart = () => (
  <main className="primary-color font-light px-8">
    <Navbar />
    <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3 bg-white shadow-md p-6">
        <h2 className="text-2xl mb-6 text-center">My Cart</h2>
        <hr className="my-3" />
        <CartItem
          productName="I'm a product"
          productPrice={15}
          quantity={4}
          imageUrl="/path/to/chair.png"
        />
        <hr className="my-3" />
        <CartItem
          productName="I'm a product"
          productPrice={10}
          quantity={2}
          imageUrl="/path/to/oil.png"
        />
        <hr className="my-3" />
        <div className="flex justify-between items-center mt-6 text-sm">
          <button className="hover:text-gray-700">Enter a promo code</button>
          <button className="hover:text-gray-700">Add a note</button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-white shadow-md p-6">
        <h2 className="text-center text-2xl mb-6">Order Summary</h2>
        <hr className="my-3" />
        <div className="flex justify-between mb-4 text-sm">
          <span>Subtotal</span>
          <span>C$80.00</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span>Delivery</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between text-sm underline mb-6 hover:text-gray-700">
          <span>Alberta, Canada</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mb-4 text-lg mt-6">
          <span>Total</span>
          <span>C$80.00</span>
        </div>
        <button className="w-full bg-black text-white hover:bg-gray-800 p-4 mt-4">
          Checkout
        </button>
        <h2 className="text-center text-sm font-semibold mt-4">Secure Checkout</h2>
      </div>
    </div>
    <Footer />
  </main>
);

export default Cart;
