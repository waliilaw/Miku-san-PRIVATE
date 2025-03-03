"use client"

import React from "react";
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <Image src="/loading.gif" alt="Loading...alt" className="w-72 h-72" />
    </div>
  );
};

export default Loading; 