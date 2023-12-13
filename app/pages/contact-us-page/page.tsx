"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { browsing } from "@/app/assets/browsing";

const Contact = () => {
    return (
      <main className="primary-color">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-center secondary-color px-44 py-5">
            <h2 className="text-4xl uppercase mb-4">Contact Us</h2>
            <p className="text-sm font-light">
              1301 16th Avenue Northwest
            </p>
            <p className="text-sm font-light">
              Calgary, AB, Canada
            </p>
            <p className="text-sm font-light">
              T2M0L4
            </p>
            <p className="text-sm mt-28 font-light">support@shopsphere.ca</p>
            <p className="text-sm mt-2 font-light">123-456-7890</p>
          </div>
          <Image
            src={browsing}
            alt="browsing"
            className=""
            style={{ maxHeight: 440, maxWidth: 490 }}
          />
        </div>
        <div className="flex flex-col justfiy-start max-w-sm text-sm mt-20 ml-60">
          <h2 className="text-xl uppercase">Opening Hours</h2>
          <p className="py-4">Visit Us</p>
          <p className=" font-light">Monday - Friday</p>
          <p className=" font-light">9:00am - 8:00pm</p>
          <p className="mt-8 font-light">Saturday - Sunday</p>
          <p className=" font-light">10:00am - 5:00pm</p>
        </div>
        <Footer />
      </main>
    );
  };
  
  export default Contact;