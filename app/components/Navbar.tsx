"use client";
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="primary-color p-10">
      <div>
        <div className="text-center text-5xl m-6">ShopSphere</div>
        <ul className="flex flex-row justify-center space-x-10 font-light text-sm">
          <Link href={"/pages/home-page"}>Home</Link>
          <Link href={"/pages/contact-us-page"}>Contact</Link>
          <Link href={"/pages/about-us-page"}>About Us</Link>
          <Link href={"/pages/shop-page"}>Shop</Link>
          {session ? (
            <>
              Hello {session.user?.name}
              <button
                onClick={() => {
                  signOut();
                  router.push("/pages/home-page");
                }}
                className="text-right"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href={"/pages/login-register-page"}
                className="flex justify-end text-right mr-80 font-light"
              >
                Login
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
