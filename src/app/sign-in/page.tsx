"use client"

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 relative">
      <div className="relative z-10 ">
        <SignIn 
          path="/sign-in" 
          routing="path" 
          afterSignInUrl="/create" 
        />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Custom Button
        </button>
      </div>
    </div>
  );
} 