"use client";
import React, { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { useRouter, useSearchParams } from "next/navigation";
import Item from "@/app/types/item";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Accordion from "@/app/components/Accordion";

export default function Product() {
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("purple");

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(`/api/display-items/${itemId}`);
      const data = await response.json();
      setItem(data);
    };
    getItem();
  });

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
  };

  const addToCart = () => {};

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <main className="flex flex-row items-start justify-center gap-8 p-4">
          <div className="flex flex-col items-center">
            <div className="w-96 h-96 relative mb-4 mr-20">
              <img
                src={item?.listImageUrl[0]}
                alt="Product Image"
                className="w-full h-full object-contain"
              />
              <div className="secondary-color p-12">
                <p className="text-sm text-center py-3">
                  I'm a product description. I'm a great place to add more
                  details about your product such as sizing, material, care
                  instructions and cleaning instructions.
                </p>
              </div>
            </div>
            <div className="flex">{/* Thumbnail images */}</div>
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-semibold">{item?.name}</h1>
            {/* <p className="text-gray-500">SKU: {item?.id}</p> */}
            <p className="text-xl my-4">C ${item?.price}</p>
            {/* <div className="flex justify-center space-x-2 my-4">
              <button
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "purple" ? "bg-purple-600" : "bg-purple-300"
                }`}
                onClick={() => setSelectedColor("purple")}
              />
              <button
                className={`w-6 h-6 rounded-full ${
                  selectedColor === "black" ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => setSelectedColor("black")}
              />
            </div> */}
            <div className="my-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2"
              >
                {/* <MinusIcon className="w-6 h-6" /> */}
              </button>
              <input
                type="number"
                className="w-16 text-center"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button onClick={() => setQuantity(quantity + 1)} className="p-2">
                {/* <PlusIcon className="w-6 h-6" /> */}
              </button>
            </div>
            <button
              onClick={addToCart}
              className="bg-black text-white py-2 px-4 my-4"
            >
              Add to Cart
            </button>
            {/* Product info, return & refund policy, etc. */}
            <div className="text-left mt-6 font-light">
              <h1 className="text-lg uppercase">Product Info</h1>
              <p className="text-sm mt-4 max-w-md">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </p>
              <hr className="my-6" />
              <Accordion
                title="Return & Refund Policy"
                content={`I’m a Return and Refund policy. I’m a great place to let your 
                customers know what to do in case they are dissatisfied with their purchase. 
                Having a straightforward refund or exchange policy is a great way to build 
                trust and reassure your customers that they can buy with confidence.`}
              />
              <hr className="my-6" />
            </div>
            <Accordion
              title="Shipping Info"
              content={`I'm a shipping policy. I'm a great place to add more information
              about your shipping methods, packaging and cost. Providing
              straightforward information about your shipping policy is a great
              way to build trust and reassure your customers that they can buy
              from you with confidence.`}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
