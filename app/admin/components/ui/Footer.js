import React from "react";
import Link from "next/link";

const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <footer className="mx-4 my-4 rounded-lg bg-white p-4 text-center shadow md:items-center md:p-6 xl:p-8">
      <p className="text-sm font-normal text-gray-500">
        © {curYear}{" "}
        <Link href="/" className="hover:underline">
          Current.gold
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
