import * as HeroIcons from '@heroicons/react/24/solid';

export type HeroIconName = keyof typeof HeroIcons;

export const categories: {
  id: number;
  name: string;
  description: string;
  icon: HeroIconName; 
}[] = [
  {
    id: 1,
    name: "Food",
    description: "Discover restaurants, cafes, and bakeries.",
    icon: "ShoppingBagIcon",
  },
  {
    id: 2,
    name: "Construction",
    description: "Explore builders, plumbers, and electricians.",
    icon: "BuildingOfficeIcon",
  },
  {
    id: 3,
    name: "Retail",
    description: "Shop from local stores and businesses.",
    icon: "TagIcon",
  },
  {
    id: 4,
    name: "Wellness",
    description: "Find gyms, spas, and healthcare services.",
    icon: "HeartIcon",
  },
  {
    id: 5,
    name: "Services",
    description: "Connect with consultants, accountants, and more.",
    icon: "BriefcaseIcon",
  },
];
