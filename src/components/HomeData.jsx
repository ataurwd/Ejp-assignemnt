"use client";
import Link from "next/link";
import React from "react";

const HomeData = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 mt-10">
      {data.slice(0, 20).map((item) => (
        <div
          key={item.id}
          className="border space-y-3 p-4 shadow-sm rounded-md"
        >
          <h2 className="text-sm">
            <span className="font-bold">Title:</span>
            {item.title}
          </h2>
          <p>{item.body.slice(0, 50)}...</p>
          <Link
            className="bg-black text-white px-3 py-1 rounded-md"
            href={`/${item.id}`}
          >
            see More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeData;
