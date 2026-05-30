export type Restaurant = {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  distance: string;
  tags: string[];
  description: string;
  image: string;
  offers?: string[];
};

export const restaurants: Restaurant[] = [
  {
    id: "resto_001",
    name: "Sunny Side Burgers",
    category: "Burgers",
    rating: 4.8,
    deliveryTime: "25-30 min",
    priceRange: "$$",
    distance: "1.2 mi",
    tags: ["Fast food", "Family friendly", "Popular"],
    description:
      "Classic burgers, crispy fries, and house-made shakes for your comfort craving.",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    offers: ["10% off first order", "Free fries on orders over $30"],
  },
  {
    id: "resto_002",
    name: "Green Bowl Kitchen",
    category: "Healthy",
    rating: 4.7,
    deliveryTime: "20-25 min",
    priceRange: "$$",
    distance: "0.8 mi",
    tags: ["Salads", "Bowls", "Vegan options"],
    description:
      "Fresh bowls, seasonal salads, and nourishing smoothies made to order.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    offers: ["Free drink with bowl combo"],
  },
  {
    id: "resto_003",
    name: "Spice Route Curry House",
    category: "Indian",
    rating: 4.6,
    deliveryTime: "30-35 min",
    priceRange: "$$$",
    distance: "2.0 mi",
    tags: ["Family meals", "Spicy", "Authentic"],
    description:
      "Rich curries, fragrant biryanis, and tandoori specials inspired by traditional spices.",
    image:
      "https://images.unsplash.com/photo-1604908177522-7094b057a6ea?auto=format&fit=crop&w=800&q=80",
    offers: ["Free naan with any curry"],
  },
  {
    id: "resto_004",
    name: "Mama Mia Pizzeria",
    category: "Pizza",
    rating: 4.9,
    deliveryTime: "18-22 min",
    priceRange: "$$",
    distance: "1.5 mi",
    tags: ["Family friendly", "Wood-fired", "Best seller"],
    description:
      "Hand-tossed pizzas, crisp salads, and savory sides baked in a wood-fired oven.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    offers: ["Buy one get one 50% off", "Free garlic knots with large pizza"],
  },
  {
    id: "resto_005",
    name: "Taco Fiesta",
    category: "Mexican",
    rating: 4.5,
    deliveryTime: "22-28 min",
    priceRange: "$$",
    distance: "1.1 mi",
    tags: ["Tacos", "Street food", "Quick bites"],
    description:
      "Fresh tacos, loaded nachos, and vibrant salsas packed with bold Mexican flavors.",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
    offers: ["2 tacos + drink combo"],
  },
  {
    id: "resto_006",
    name: "Seaside Sushi Bar",
    category: "Japanese",
    rating: 4.8,
    deliveryTime: "28-33 min",
    priceRange: "$$$",
    distance: "2.4 mi",
    tags: ["Sushi", "Sashimi", "Premium"],
    description:
      "Delicate sushi rolls, fresh sashimi, and Japanese favorites delivered with care.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    offers: ["Free miso soup with sushi set"],
  },
  {
    id: "resto_007",
    name: "Noodle Nook",
    category: "Asian",
    rating: 4.4,
    deliveryTime: "24-29 min",
    priceRange: "$$",
    distance: "1.7 mi",
    tags: ["Noodles", "Comfort food", "Quick"],
    description:
      "Savory noodle bowls, dumplings, and stir-fry dishes crafted for a satisfying meal.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    offers: ["Free spring rolls with entree"],
  },
  {
    id: "resto_008",
    name: "Sweet Treats Bakery",
    category: "Bakery",
    rating: 4.7,
    deliveryTime: "15-20 min",
    priceRange: "$$",
    distance: "0.6 mi",
    tags: ["Desserts", "Coffee", "Breakfast"],
    description:
      "Fresh pastries, artisan coffee, and sweet treats baked daily for breakfast or dessert.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    offers: ["Free cookie with any pastry order"],
  },
];
