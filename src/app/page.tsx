"use client";

import { GoogleLogin } from "@react-oauth/google";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-center py-12 text-2xl">OnlineMD Web-Development Ent.</h1>
        <div className="w-[20%] mx-auto">
          <GoogleLogin onSuccess={() => alert("Login Successful")} onError={() => alert("Login Failed")} />
        </div>
      </div>
    </>
  );
}
