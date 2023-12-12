import React from "react";
import Navbar from "@/app/components/Navbar";
import ProductSlider from "@/app/components/ProductSlider";
import { Product } from "@/app/types/item";
import Footer from "@/app/components/Footer";

// Ok this is awesome
const HomePage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product#1",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
    {
      id: 2,
      name: "Product#2",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
    {
      id: 3,
      name: "Product#3",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
    {
      id: 4,
      name: "Product#4",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
    {
      id: 5,
      name: "Product#5",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
    {
      id: 6,
      name: "Product#6",
      description: "I am a product",
      price: "CAD 9.99",
      image: "@/app/images/air-freshner1.webp",
    },
  ];
  return (
    <div className="primary-color">
      <Navbar />
      <div className="flex justify-center">
        <div className="p-4 text-7xl max-w-3xl text-center uppercase">
          New Arrivals Are Here
        </div>
      </div>
      <div className="p-8 font-light text-center">Limited time price drop!</div>
      <div className="flex justify-center px-20">
        <div className="flex justify-center bg-slate-400 home-page-image-parent-div">
          <img
            src="https://static.wixstatic.com/media/f37599a3250341ebb244554882b84860.jpg/v1/fill/w_1225,h_569,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/f37599a3250341ebb244554882b84860.jpg"
            alt="Product Inventory"
            width="980"
            height="455"
            className="home-page-image"
          ></img>
        </div>
      </div>
      <ProductSlider products={products} />
      <div className="text-left ml-80 mr-80 p-12 secondary-color">
        <h2 className="text-4xl uppercase">What We're All About</h2>
        <h2 className="text-sm py-4 font-light">Made For Everyone</h2>
        <div className="text-left">
          <p className="text-sm font-light">
            We founded ShopSphere with one goal in mind: providing high-quality,
            carefully developed products, made for everyone. Our passion for
            excellence has driven us from the beginning and continues to propel
            us going forward. We know that every item counts, and strive to make
            your entire shopping experience as rewarding as possible. Don't
            settle for anything but the best—check us out for yourself.
          </p>
        </div>
      </div>
      <div className="pt-10">
        <div className="text-right ml-80 mr-80 p-12 secondary-color">
          <h2 className="text-4xl uppercase">Student-Owned Business</h2>
          <h2 className="text-sm py-4 font-light">Truly Top-Notch</h2>
          <div className="text-right">
            <p className="text-sm font-light">
              At our core, we are a business owned and operated by students. Our
              dedication to providing top-quality products and services is
              driven by our commitment to excellence. We strive to offer unique
              and innovative solutions, all while supporting student
              entrepreneurship and creativity.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
