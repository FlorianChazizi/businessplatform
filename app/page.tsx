'use client'
import { Metadata } from "next";
import { useUserStore } from "./store/useUserStore";
import HeroSection from "./components/HeroSection";
import Maps from "./components/Maps";
import CityRegistration from '../app/components/CityRegistration';
import CategoryComponent from "./components/CategoryComponent";
// export const metadata: Metadata = {
//   title: 'Next Auth',
//   description: 'Track product prices effortlessly and save money on your online shopping.',
// }

export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="">
      <HeroSection />
      <CategoryComponent />
      <Maps />
    </div>
  );
} 