import React from "react";
import LoginPage from "@/app/components/LoginPage";
import RegisterPage from "@/app/components/RegisterPage";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <div className="h-screen primary-color">
      <Navbar />
      <div className="flex flex-row justify-center pt-10">
        <div className="mr-20">
          <RegisterPage />
        </div>
        <div className="ml-20">
          <LoginPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}
