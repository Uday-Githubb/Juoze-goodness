import greenJuice from "@/assets/green-juice.jpg";
import orangeJuice from "@/assets/orange-juice.jpg";
import purpleJuice from "@/assets/purple-juice.jpg";

export interface Juice {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: {
    small: number;
    medium: number;
    large: number;
  };
  image: string;
  category: string;
  benefits: string[];
  nutritionScore: number;
  preparationTime: number;
  isPopular: boolean;
  isNew: boolean;
}

export const juices: Juice[] = [
  {
    id: "green-power",
    name: "Green Power",
    description: "A nutrient-packed blend of leafy greens and crisp vegetables",
    ingredients: ["Spinach", "Kale", "Cucumber", "Celery", "Lemon", "Ginger"],
    price: { small: 8.99, medium: 11.99, large: 14.99 },
    image: greenJuice,
    category: "Detox",
    benefits: ["High in Iron", "Detoxifying", "Energy Boost", "Anti-inflammatory"],
    nutritionScore: 95,
    preparationTime: 5,
    isPopular: true,
    isNew: false,
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description: "Vibrant orange juice packed with beta-carotene and vitamins",
    ingredients: ["Carrot", "Orange", "Beet", "Turmeric", "Ginger"],
    price: { small: 9.99, medium: 12.99, large: 15.99 },
    image: orangeJuice,
    category: "Immunity",
    benefits: ["Rich in Vitamin A", "Immune Support", "Glowing Skin", "Anti-oxidant"],
    nutritionScore: 92,
    preparationTime: 4,
    isPopular: true,
    isNew: false,
  },
  {
    id: "purple-majesty",
    name: "Purple Majesty",
    description: "Antioxidant-rich purple vegetables for ultimate wellness",
    ingredients: ["Purple Beet", "Purple Cabbage", "Blueberry", "Grape", "Lemon"],
    price: { small: 10.99, medium: 13.99, large: 16.99 },
    image: purpleJuice,
    category: "Antioxidant",
    benefits: ["High Antioxidants", "Brain Health", "Heart Health", "Anti-aging"],
    nutritionScore: 98,
    preparationTime: 6,
    isPopular: false,
    isNew: true,
  },
  {
    id: "cucumber-mint",
    name: "Cucumber Mint Refresh",
    description: "Cooling and hydrating blend perfect for hot days",
    ingredients: ["Cucumber", "Mint", "Lime", "Coconut Water", "Spinach"],
    price: { small: 7.99, medium: 10.99, large: 13.99 },
    image: greenJuice,
    category: "Hydration",
    benefits: ["Hydrating", "Cooling", "Digestive Aid", "Refreshing"],
    nutritionScore: 88,
    preparationTime: 3,
    isPopular: false,
    isNew: false,
  },
  {
    id: "spicy-tomato",
    name: "Spicy Tomato Fusion",
    description: "A savory blend with a kick of spice and umami flavor",
    ingredients: ["Tomato", "Red Bell Pepper", "Jalapeño", "Celery", "Basil"],
    price: { small: 8.99, medium: 11.99, large: 14.99 },
    image: orangeJuice,
    category: "Savory",
    benefits: ["Lycopene Rich", "Metabolism Boost", "Savory Satisfaction", "Vitamin C"],
    nutritionScore: 85,
    preparationTime: 4,
    isPopular: false,
    isNew: true,
  },
  {
    id: "iron-warrior",
    name: "Iron Warrior",
    description: "Iron-rich dark leafy greens for strength and vitality",
    ingredients: ["Swiss Chard", "Spinach", "Kale", "Parsley", "Lemon", "Apple"],
    price: { small: 9.99, medium: 12.99, large: 15.99 },
    image: greenJuice,
    category: "Strength",
    benefits: ["High Iron", "Muscle Recovery", "Energy Boost", "Vitality"],
    nutritionScore: 94,
    preparationTime: 5,
    isPopular: true,
    isNew: false,
  },
];

export const categories = [
  "All",
  "Detox",
  "Immunity",
  "Antioxidant",
  "Hydration",
  "Savory",
  "Strength",
];