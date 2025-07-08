const recipes = [
  {
    title: "Butter Chicken",
    ingredients: ["Chicken", "Butter", "Tomato puree", "Cream", "Garam masala", "Salt"],
    instructions: `1. Marinate chicken with yogurt and spices. Let sit 30 mins.\n2. Sauté onions in butter.\n3. Add tomato puree and simmer.\n4. Add chicken and cook till done.\n5. Finish with cream and garam masala.`,
    tags: "North Indian, Non-Veg, Spicy",
    difficulty: "Medium",
    time: 45
  },
  {
    title: "Masala Dosa",
    ingredients: ["Dosa batter", "Boiled potatoes", "Onion", "Mustard seeds", "Curry leaves"],
    instructions: `1. Prepare potato masala with spices.\n2. Spread batter on tawa.\n3. Add filling, fold and serve with chutney.`,
    tags: "South Indian, Breakfast, Veg",
    difficulty: "Medium",
    time: 30
  },
  {
    title: "Rajma Chawal",
    ingredients: ["Rajma", "Tomato", "Onion", "Spices", "Rice"],
    instructions: `1. Soak rajma overnight.\n2. Pressure cook till soft.\n3. Prepare onion-tomato masala.\n4. Add rajma and simmer.\n5. Serve with rice.`,
    tags: "North Indian, Veg",
    difficulty: "Easy",
    time: 60
  },
  {
    title: "Aloo Paratha",
    ingredients: ["Wheat flour", "Boiled potatoes", "Green chili", "Coriander", "Ghee"],
    instructions: `1. Make dough from wheat flour.\n2. Stuff with spiced mashed potatoes.\n3. Roll and cook on tawa with ghee.`,
    tags: "North Indian, Breakfast, Veg",
    difficulty: "Easy",
    time: 25
  },
  {
    title: "Chicken Biryani",
    ingredients: ["Chicken", "Basmati rice", "Yogurt", "Biryani masala", "Onion"],
    instructions: `1. Marinate chicken in yogurt and spices.\n2. Cook rice separately.\n3. Layer rice and chicken.\n4. Dum cook for 25 mins.`,
    tags: "Non-Veg, Spicy",
    difficulty: "Hard",
    time: 90
  },
  {
    title: "Palak Paneer",
    ingredients: ["Spinach", "Paneer", "Garlic", "Onion", "Tomato", "Cream"],
    instructions: `1. Blanch spinach and puree.\n2. Sauté onion-tomato-garlic mix.\n3. Add paneer and spinach.\n4. Add cream before serving.`,
    tags: "North Indian, Veg",
    difficulty: "Medium",
    time: 40
  },
  {
    title: "Pav Bhaji",
    ingredients: ["Potato", "Tomato", "Peas", "Capsicum", "Butter", "Pav buns"],
    instructions: `1. Cook vegetables till soft.\n2. Mash and add spices.\n3. Serve hot with butter-toasted pav.`,
    tags: "Maharashtrian, Spicy, Veg",
    difficulty: "Medium",
    time: 35
  },
  {
    title: "Chole Bhature",
    ingredients: ["Chickpeas", "Spices", "Onion", "Flour", "Yogurt"],
    instructions: `1. Cook chickpeas with onion-tomato gravy.\n2. Prepare bhature dough and deep fry.\n3. Serve with pickle and onion.`,
    tags: "North Indian, Veg",
    difficulty: "Hard",
    time: 60
  },
  {
    title: "Idli Sambar",
    ingredients: ["Idli batter", "Toor dal", "Sambar powder", "Vegetables", "Mustard seeds"],
    instructions: `1. Steam idlis.\n2. Cook dal with veggies and spices.\n3. Prepare tempering and add.\n4. Serve hot.`,
    tags: "South Indian, Veg, Breakfast",
    difficulty: "Medium",
    time: 40
  },
  {
    title: "Fish Curry",
    ingredients: ["Fish", "Coconut milk", "Tamarind", "Mustard", "Curry leaves"],
    instructions: `1. Marinate fish with turmeric and salt.\n2. Prepare coconut-based gravy.\n3. Add fish and cook till done.`,
    tags: "South Indian, Non-Veg",
    difficulty: "Medium",
    time: 50
  },
  {
    title: "Matar Paneer",
    ingredients: ["Paneer", "Peas", "Tomato", "Onion", "Spices"],
    instructions: `1. Fry paneer cubes.\n2. Make masala base.\n3. Add peas and paneer.\n4. Simmer for 10 mins.`,
    tags: "North Indian, Veg",
    difficulty: "Easy",
    time: 35
  },
  {
    title: "Egg Curry",
    ingredients: ["Boiled eggs", "Tomato", "Onion", "Spices"],
    instructions: `1. Sauté onion-tomato gravy.\n2. Add spices.\n3. Add boiled eggs and simmer.`,
    tags: "Indian, Non-Veg",
    difficulty: "Easy",
    time: 30
  },
  {
    title: "Paneer Tikka",
    ingredients: ["Paneer", "Yogurt", "Spices", "Capsicum", "Onion"],
    instructions: `1. Marinate paneer in yogurt and spices.\n2. Skewer and grill till charred.\n3. Serve with mint chutney.`,
    tags: "Indian, Veg, Tandoori",
    difficulty: "Medium",
    time: 45
  },
  {
    title: "Dhokla",
    ingredients: ["Gram flour", "Yogurt", "Mustard seeds", "Eno"],
    instructions: `1. Prepare batter with besan and yogurt.\n2. Add Eno and steam.\n3. Temper with mustard seeds and serve.`,
    tags: "Gujarati, Veg, Breakfast",
    difficulty: "Easy",
    time: 25
  },
  {
    title: "Hyderabadi Haleem",
    ingredients: ["Wheat", "Mutton", "Lentils", "Spices", "Ghee"],
    instructions: `1. Cook lentils and mutton till tender.\n2. Blend and cook till thick.\n3. Add spices and ghee.`,
    tags: "Hyderabadi, Non-Veg",
    difficulty: "Hard",
    time: 120
  },
  {
    title: "Samosa",
    ingredients: ["Potato", "Flour", "Cumin", "Spices", "Peas"],
    instructions: `1. Prepare dough and stuffing.\n2. Shape into cones.\n3. Fill and fry till golden.`,
    tags: "Snack, Veg, North Indian",
    difficulty: "Medium",
    time: 40
  },
  {
    title: "Kheer",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Dry fruits"],
    instructions: `1. Simmer rice in milk.\n2. Stir till thick.\n3. Add sugar and cardamom.\n4. Garnish with nuts.`,
    tags: "Dessert, Veg",
    difficulty: "Easy",
    time: 60
  },
  {
    title: "Veg Pulao",
    ingredients: ["Rice", "Carrot", "Beans", "Spices", "Ghee"],
    instructions: `1. Sauté vegetables in ghee.\n2. Add rice and spices.\n3. Cook with water until done.`,
    tags: "Veg, North Indian",
    difficulty: "Easy",
    time: 30
  },
  {
    title: "Poha",
    ingredients: ["Flattened rice", "Onion", "Mustard seeds", "Curry leaves", "Peanuts"],
    instructions: `1. Rinse poha and drain.\n2. Sauté onions, mustard, peanuts.\n3. Add poha and mix.`,
    tags: "Breakfast, Veg, Maharashtrian",
    difficulty: "Easy",
    time: 20
  },
  {
    title: "Upma",
    ingredients: ["Rava (semolina)", "Mustard seeds", "Green chilies", "Vegetables"],
    instructions: `1. Roast rava and keep aside.\n2. Sauté veggies with spices.\n3. Add rava and water.\n4. Stir till thick.`,
    tags: "Breakfast, South Indian, Veg",
    difficulty: "Easy",
    time: 20
  }
];
