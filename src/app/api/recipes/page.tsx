


// Interface for product data
export interface IRecipe {
  id: number;
  image: string;
  title: string;
  slug: string;
  ingredients: string[];
  steps: string[];
  description:string 
}

export const productData: IRecipe[] = [
  {
    id: 1,
    image: "/Spaghetti-Bolognese.webp",
    title: "Spaghetti Bolognese",
    slug: "spaghetti-bolognese",
    description:" A classic Italian dish of tender spaghetti paired with a rich, meaty Bolognese sauce. Slow-cooked with tomatoes, garlic, and aromatic herbs, it delivers a perfect blend of savory and tangy flavors. Finished with Parmesan, it’s a comforting delight for any occasion!",
    ingredients: [
        "Olive oil 2 tbsp",
        "Onion 1, finely chopped",
        "Carrot 1, finely chopped",
        "Celery 1 stalk, finely chopped",
        "Garlic 2 cloves, minced",
        "Ground beef 500g",
        "Tomato paste 2 tbsp",
        "Canned tomatoes 400g",
        "Beef stock 1 cup",
        "Dried oregano 1 tsp",
        "Dried basil 1 tsp",
        "Salt to taste",
        "Black pepper to taste",
        "Spaghetti 400g",
        "Parmesan cheese to serve, grated",
      ],
    steps: [
      "Heat olive oil in a large pan over medium heat.",
      "Add onion, carrot, celery, and garlic. Cook until softened, about 5 minutes.",
      "Add the ground beef and cook until browned, breaking it into small pieces with a spoon.",
      "Stir in tomato paste and cook for 1 minute to combine.",
      "Add canned tomatoes, beef stock, oregano, and basil. Mix well.",
      "Reduce the heat and simmer for 20-30 minutes, stirring occasionally, until the sauce thickens.",
      "Meanwhile, cook spaghetti according to package instructions. Drain and set aside.",
      "Season the sauce with salt and black pepper to taste.",
      "Serve the sauce over the spaghetti and top with grated Parmesan cheese."
    ],
  },
  {
    id: 2,
    image: "/triple-chocolate-cake-4.jpg",
    title: "Chocolate Cake",
    slug: "chocolate-cake",
    ingredients: [
     "1 ¾ cups all-purpose flour",
"1 ½ teaspoons baking powder",
"1 ½ teaspoons baking soda",
"½ teaspoon salt",
"¾ cup unsweetened cocoa powder",
"1 ½ cups sugar",
"2 large eggs",
"1 cup milk",
"½ cup vegetable oil",
"2 teaspoons vanilla extract",
"1 cup boiling water",
"1 cup heavy cream (for frosting)",
"2 cups powdered sugar (for frosting)",
"1 teaspoon vanilla extract (for frosting)",
"2 cups semi-sweet chocolate chips (for frosting)"

    ],
    steps: [
       " Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",

       " In a large bowl, sift together the flour, baking powder, baking soda, salt, and cocoa powder.",
        
        "In another bowl, whisk together the sugar, eggs, milk, oil, and vanilla extract until smooth.",
        
       " Gradually add the dry ingredients to the wet ingredients, mixing until combined.",
        
     "   Carefully add the boiling water to the batter, stirring gently. The batter will be thin, but that normal.",
        
      "  Pour the batter evenly into the prepared cake pans.",
        
        "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
        
        "let the cakes cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely.",
        
        "For the frosting, heat the heavy cream in a saucepan over medium heat until it begins to simmer.",
        
        "Remove from heat and stir in the chocolate chips. Let the mixture sit for a few minutes to melt, then stir until smooth.",
        
        "Allow the frosting to cool to room temperature, then stir in the powdered sugar and vanilla extract until smooth and creamy.",
        
        "Once the cakes are completely cooled, spread a layer of frosting on the top of one cake, then place the second cake on top.",
        
        "Frost the entire cake with the chocolate frosting.",
        
       " Decorate with chocolate shavings, sprinkles, or other toppings of your choice.,"
        
    ],
     description:"A rich, moist, and decadent chocolate cake that melts in your mouth with every bite. Perfectly balanced with the sweetness of chocolate and a slight hint of vanilla, it’s topped with a velvety, smooth chocolate frosting. Ideal for any celebration or as a treat for chocolate lovers!"
  },
  {
    id: 3,
    image: "/pasta.webp",
    title: " Fettuccine Pasta",
    slug: "Alfredo-pasta",
    ingredients: [
       " Pasta: Of course, you will need fettuccine pasta. ",
"Butter: This Alfredo sauce starts with two sticks of butter. ",
"Cream: The rich sauce calls for almost a cup of heavy cream. ",
"Seasonings: The fettuccine Alfredo is simply seasoned with salt, pepper, and garlic salt",
"Cheese: You will need Romano and Parmesan cheeses.",
      ],
    steps: [
      "Cook the Fettuccine Pasta: Boil a large pot of salted water. Add the fettuccine pasta and cook according to the package instructions, usually about 8-10 minutes.Drain the pasta, reserving about a cup of pasta water.",
      "Prepare the Alfredo Sauce: In a large skillet, melt the butter over medium heat. Add the heavy cream and bring to a simmer. Stir in the garlic salt, salt, and pepper to taste.Let the sauce simmer for 3-5 minutes until it thickens slightly.",
      "Add the Cheese: Lower the heat and stir in the grated Parmesan and Romano cheeses until fully melted and the sauce becomes smooth and creamy",
   "Combine the Pasta and Sauce: Add the drained fettuccine to the skillet with the sauce. Toss the pasta in the sauce, adding some reserved pasta water to thin out the sauce if needed.", 
    "Serve:Once the pasta is well coated with the creamy sauce, serve immediately.Optionally, sprinkle extra Parmesan or Romano cheese on top for added flavor.",
    
    
    
    ],
     description:"Fettuccine Alfredo is a creamy, cheesy pasta dish made with fettuccine pasta, butter, heavy cream, and a mix of Romano and Parmesan cheeses. It’s simple yet indulgent, with a rich Alfredo sauce that coats the pasta. This dish is perfect for those craving a comforting, flavorful meal."
  },

  {
    id: 4,
    image: "/soup.jpg",
    title: "Chipotle Corn Chowder",
    slug: "Chipotle-Corn-Chowder",
    ingredients: [
        "2 tablespoons olive oil",
        "3 cups red potatoes, diced",
        "half an onion, diced",
        "2 cloves garlic, minced",
        "3 cups sweet corn kernels",
        "1 large zucchini, diced",
        "1 teaspoon salt (more to taste)",
        "3 cups vegetable broth",
        "1 cup Almond Breeze Original Almondmilk",
        "1–2 individual chipotle peppers",
        "1/2 cup loosely packed fresh basil leaves, for serving",
        "seeds, nuts, oils, etc. for topping"
      ],
    steps: [
      "Sauté: Heat the olive oil in a large pot over medium high heat. Add all vegetables + salt and sauté until tender-crisp. Add the broth and simmer until potatoes are soft",
      "Blend: Transfer 3 cups of soup to a high-powered blender. Add the almondmilk and chipotles. Blend until desired smoothness (I go for super smooth with this one).",
      "Finish: Stir the blended mixture into the large pot to combine with remaining soup. Serve into bowls and top with lots of fresh basil, pesto, olive oil, hot sauce (!), and maybe some seeds or nuts to be fancy.",
    ],
     description:"A hearty, smoky delight that blends sweet corn with the bold, spicy kick of chipotle peppers. This rich and creamy soup is a perfect balance of flavor, with a touch of heat that will leave you craving more. Topped with fresh herbs and a hint of lime, it’s the ultimate comfort food for any occasion."
  },

  {
    id: 5,
    image: "/image.webp",
    title: "Mom's Potato Latkes",
    slug: "Mom's-Potato-Latkesr",
    ingredients: [
       " 3 cups shredded potato",
"¼ cup grated onion",

"6 saltine crackers, or as needed, crushed",

"2 large eggs, beaten",

"½ teaspoon salt, or more to taste",

"¼ teaspoon ground black pepper",

"½ cup vegetable oil, or as needed"
      ],
    steps: [
     "   Combine potato, onion, crushed crackers, eggs, salt, and pepper together in a large bowl.",
        "Heat 1/4 inch oil in a heavy skillet over medium-high heat.",
        
      "  Drop spoonfuls of potato mixture, first pressing mixture against side of the bowl to remove excess liquid, into hot oil; slightly flatten latkes with the back of a spoon to make an even thickness.",
        
      "  Cook in batches until browned and crisp, 3 to 5 minutes per side. Drain latkes on a paper towel-lined plate."
    ],
     description:"Latkes (potato pancakes) are a must-have at Hanukkah, but are really wonderful any time of the year! This is my mother's recipe, which is honestly the best potato latke I've had. I usually end up making a second batch because they disappear so quickly. I've tried other recipes and always return to this one. Lovely topped with sour cream or applesauce."
  },

  {
    id: 6,
    image: "/image (1).webp",
    title: "Spicy Sausage Balls without Bisquick",
    slug: "Spicy-Sausage-Balls-without-Bisquick",
    ingredients: [
       "  pound bulk spicy pork sausage",
"1 cup shredded sharp Cheddar cheese, or more to taste",

"6 saltine crackers, or as needed, crushed",

"1 cup almond flour",

"2 tablespoons coconut flour",

"2 (.25 ounce) packages unflavored gelatin",

"1 large egg",
"½ teaspoon baking powder"

      ],
    steps: [
     "   Preheat the oven to 325 degrees F (165 degrees C). Line a jelly roll pan with parchment paper.",
        "Combine sausage, Cheddar cheese, almond flour, coconut flour, gelatin, egg, and baking powder in a large bowl. Mix to combine using your hands, a stand mixer, or a food processor. Form mixture into uniformly-sized balls (about 1 ½-inch diameter) and place on the prepared pan.",
        
      " Bake in the preheated oven until cooked through, 23 to 28 minutes. Remove sausage balls and let cool on the pan until oil is reabsorbed, about 5 minutes.",
        
    ],
     description:"These sausage balls are as good as Bisquick sausage balls, but without the carbs and gluten. They are also keto friendly! Eat them fresh out of the oven or refrigerate or freeze for later use."
  },

  {
    id: 7,
    image: "/image (2).webp",
    title: "Hot Buttered Rum ",
    slug: "Hot-Buttered-Rum",
    ingredients: [
       " 2 quarts water",
"1 (750 milliliter) bottle dark rum",

"2 cups brown sugar",

"¼ cup butter",

"3 cinnamon sticks",

"6 whole cloves",

"1 teaspoon salt",
"1 teaspoon ground nutmeg"

      ],
    steps: [
     "  Combine water, rum, brown sugar, butter, cinnamon sticks, cloves, salt, and nutmeg in a slow cooker. ",
        
      "Steep on Low until flavors combine, 2 to 6 hours.",
        
    ],
     description:"A 50/50 mix of hot water and dark rum, a little butter, and a sprinkle of brown sugar, all spiced with cinnamon, nutmeg, cloves, and a pinch of salt. It's smooth, sweet, and salty, with a slight bite from the rum. Economy party-sized."
  },

  {
    id: 8,
    image: "/imggg.jpg",
    title: "Honey Chipotle Chicken Skewers",
    slug: "Honey-Chipotle-Chicken-Skewers",
    ingredients: [
       " 2 quarts water",
"1 pound chicken breasts, cut into bite-sized pieces",

"1 1/2 tablespoon honey",

"1 chipotle pepper in adobo, minced",

"1 clove garlic, grated",

"2 tablespoons taco seasoning (I like the Siete brand)",

"1 orange, zest and juice (1–2 teaspoons zest and 1 tablespoon juice)",
"1/2 teaspoon kosher salt"

      ],
    steps: [
     "  Soak: Soak the skewers in water for 15-30 minutes while you prep the chicken. ",
        
      "Mix: Using your hands or tongs, mix the chicken with the honey chipotle mix. It’ll look saucy and messy, in a good way.",
      "Skewers: Thread the chicken pieces onto skewers (usually I get 4 skewers with a pound of chicken).",

        "Cook Em Up: You can cook these a number of different ways – I air fry them at 400 degrees for 10 minutes or until internal temperature reaches 165 degrees. Grilling would also be amazing! Finish with a drizzle of honey, or (yum) 2 tablespoons of melted butter mixed with honey. It’s so good!"
    ],
     description:"These chicken skewers are a family favorite! Very easy, deliciously smoky, nice and sweet, with a good amount of spice and bite. Air fryer, grill, and oven-friendly!."
  },


];
