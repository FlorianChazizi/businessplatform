'use client'
import { Metadata } from "next";
import { useUserStore } from "./store/useUserStore";

// export const metadata: Metadata = {
//   title: 'Next Auth',
//   description: 'Track product prices effortlessly and save money on your online shopping.',
// }

export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1> Landing page</h1>
      <h2>Hello: {user ? user.name : "Guest"}</h2>
      
    </div>
  );
} 