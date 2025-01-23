import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div>
          {!user ? (
            <>
              {" "}
              <Link
                href={"/api/auth/login"}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Login
              </Link>
              <Link
                href={"/api/auth/register"}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              href={"/api/auth/logout"}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
