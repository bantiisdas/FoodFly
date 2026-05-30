export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  veg?: boolean;
  image?: string;
};

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
  menu: MenuItem[];
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
      "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=800&q=80",
    offers: ["10% off first order", "Free fries on orders over $30"],
    menu: [
      {
        id: "menu_001_a",
        name: "Classic Cheeseburger",
        description:
          "Juicy Angus patty with cheddar, lettuce, tomato, and house sauce.",
        price: "$12",
        veg: true,
      },
      {
        id: "menu_001_b",
        name: "Crispy Bacon Burger",
        description:
          "Smoked bacon, caramelized onions, and garlic aioli on a brioche bun.",
        price: "$14",
        veg: true,
      },
      {
        id: "menu_001_c",
        name: "Shake Trio",
        description:
          "Vanilla, chocolate, and strawberry milkshakes topped with whipped cream.",
        price: "$9",
        veg: true,
        image:
          "https://images.unsplash.com/photo-1606755962777-3b9d3a7d6c4f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "menu_001_d",
        name: "Chicken Burger",
        description: "Grilled chicken patty with lettuce, tomato, and mayo.",
        price: "$13",
        veg: false,
        image:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=800&q=80",
      },
    ],
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
    menu: [
      {
        id: "menu_002_a",
        name: "Mediterranean Grain Bowl",
        description:
          "Quinoa, roasted vegetables, chickpeas, and tahini dressing.",
        price: "$13",
        veg: true,
      },
      {
        id: "menu_002_b",
        name: "Green Power Salad",
        description:
          "Kale, avocado, apple, pumpkin seeds, and lemon-herb vinaigrette.",
        price: "$11",
        veg: true,
      },
      {
        id: "menu_002_c",
        name: "Berry Smoothie",
        description:
          "Mixed berries, coconut water, and banana for a refreshing boost.",
        price: "$7",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_003_a",
        name: "Butter Chicken",
        description:
          "Creamy tomato curry with tender chicken and aromatic spices.",
        price: "$16",
        veg: true,
      },
      {
        id: "menu_003_b",
        name: "Lamb Rogan Josh",
        description: "Slow-simmered lamb in rich Kashmiri gravy.",
        price: "$18",
        veg: true,
      },
      {
        id: "menu_003_c",
        name: "Vegetable Samosas",
        description: "Crispy pastry stuffed with spiced potatoes and peas.",
        price: "$6",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_004_a",
        name: "Margherita Pizza",
        description:
          "Fresh mozzarella, basil, and tomato sauce on a wood-fired crust.",
        price: "$15",
        veg: true,
      },
      {
        id: "menu_004_b",
        name: "Truffle Mushroom Pizza",
        description: "Wild mushrooms, truffle oil, ricotta, and arugula.",
        price: "$19",
        veg: true,
      },
      {
        id: "menu_004_c",
        name: "Garlic Knots",
        description: "Warm garlic knots with herb butter and parmesan.",
        price: "$7",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_005_a",
        name: "Carne Asada Tacos",
        description: "Grilled steak, onions, cilantro, and salsa verde.",
        price: "$10",
        veg: true,
      },
      {
        id: "menu_005_b",
        name: "Veggie Taco Trio",
        description:
          "Roasted squash, black beans, avocado, and chipotle crema.",
        price: "$11",
        veg: true,
      },
      {
        id: "menu_005_c",
        name: "Loaded Nachos",
        description:
          "Crispy chips, cheese, pico de gallo, jalapeños, and guacamole.",
        price: "$13",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_006_a",
        name: "Salmon Nigiri",
        description: "Fresh salmon over seasoned sushi rice.",
        price: "$14",
        veg: true,
      },
      {
        id: "menu_006_b",
        name: "Dragon Roll",
        description: "Eel, avocado, cucumber, and tobiko with sweet sauce.",
        price: "$18",
        veg: true,
      },
      {
        id: "menu_006_c",
        name: "Miso Soup",
        description: "Traditional miso broth with tofu and scallions.",
        price: "$4",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_007_a",
        name: "Spicy Dan Dan Noodles",
        description:
          "Silky noodles tossed in chili sesame sauce and minced pork.",
        price: "$12",
        veg: true,
      },
      {
        id: "menu_007_b",
        name: "Pork Dumplings",
        description: "Steamed dumplings with ginger-soy dipping sauce.",
        price: "$8",
        veg: true,
      },
      {
        id: "menu_007_c",
        name: "House Stir-Fry Bowl",
        description: "Crispy vegetables, noodles, and savory sauce.",
        price: "$13",
        veg: true,
      },
    ],
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
    menu: [
      {
        id: "menu_008_a",
        name: "Cinnamon Roll",
        description:
          "Soft roll swirled with cinnamon and topped with cream cheese icing.",
        price: "$6",
        veg: true,
      },
      {
        id: "menu_008_b",
        name: "Espresso Latte",
        description: "Smooth espresso with steamed milk and velvety foam.",
        price: "$5",
        veg: true,
      },
      {
        id: "menu_008_c",
        name: "Berry Tart",
        description: "Flaky pastry filled with custard and fresh berries.",
        price: "$7",
        veg: true,
      },
    ],
  },
];
