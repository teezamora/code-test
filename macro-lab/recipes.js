/* ============================================================
   MACRO LAB — recipes.js
   THE ONLY FILE YOU EDIT WHEN ADDING A NEW RECIPE.

   To add a recipe:
   1. Drop your-recipe.html into /recipes/
   2. Add one object to the RECIPES array below
   3. Push to GitHub — done.
   ============================================================ */

const RECIPES = [
  {
    file:        "cottage-cheese-pancakes.html",  // filename inside /recipes/
    name:        "Cottage Cheese Pancakes",
    description: "High-protein batter · 7 ingredients",
    emoji:       "🥞",
    thumbBg:     "linear-gradient(135deg, #1a1500 0%, #2d2400 50%, #1a1500 100%)",
    tags:        ["Breakfast", "High Protein", "Post-Workout"],
    servings:    8,
    perServing: {
      calories: 207,
      protein:  11.1,
      carbs:    18.8,
      fat:       9.5,
    },
    macroSplit: {           // % of calories — must add to 100
      protein: 21.6,
      carbs:   36.6,
      fat:     41.8,
    },
  },

  {
    file:        "high-protein-breakfast-burritos.html",
    name:        "Breakfast Burritos",
    description: "Egg, sausage & cheddar wrap · 8 ingredients",
    emoji:       "🌯",
    thumbBg:     "linear-gradient(135deg, #1a0800 0%, #2d1200 50%, #1a0800 100%)",
    tags:        ["Breakfast", "High Protein", "Meal Prep"],
    servings:    6,
    perServing: {
      calories: 602,
      protein:  30.8,
      carbs:    37.6,
      fat:      35.6,
    },
    macroSplit: {
      protein: 20.7,
      carbs:   25.3,
      fat:     54.0,
    },
  },

  // ── PASTE NEW RECIPES BELOW THIS LINE ─────────────────────
  // {
  //   file:        "chicken-rice-bowl.html",
  //   name:        "Chicken Rice Bowl",
  //   description: "Lean bulk staple · 5 ingredients",
  //   emoji:       "🍚",
  //   thumbBg:     "linear-gradient(135deg, #001a0d 0%, #002d16 50%, #001a0d 100%)",
  //   tags:        ["Lunch", "High Protein", "Bulk"],
  //   servings:    4,
  //   perServing: {
  //     calories: 520,
  //     protein:  48,
  //     carbs:    58,
  //     fat:       8,
  //   },
  //   macroSplit: {
  //     protein: 37,
  //     carbs:   44,
  //     fat:     19,
  //   },
  // },

];
