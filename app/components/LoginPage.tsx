"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      setError("Invalid Credentials.");
      if (res?.ok) {
        router.push("/pages/home-page");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="secondary-color p-12 w-fit">
        <div className="sm:mx-auto sm:w-full">
          <h2 className="mt-3 text-center text-2xl leading-9 tracking-tight text-gray-900 font-semibold">
            Log Into Your Account
          </h2>
        </div>

        <div className="mt-10">
          <form className="space-y-6" action="#" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="  Your Email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="pt-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-800 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="  Your Password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="pt-4">
              {error && (
                <div className="w-fit bg-red-500 text-white text-sm py-1 px-3 rounded-md mb-3">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm mb-6">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-blue-800 hover:text-blue-500"
            >
              Click here to Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
