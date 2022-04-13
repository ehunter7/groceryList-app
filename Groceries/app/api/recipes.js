import client from "./client";

const endpoint = "/listings";

const getRecipes = () => client.get(endpoint);

const addRecipe = (recipe) => {
  const data = new FormData();
  data.append("title", recipe.title);
  data.append("price", recipe.price);
  data.append("categoryId", recipe.category.value);
  data.append("description", recipe.description);

  recipe.images.foreach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (recipe.location) {
    data.append("location", JSON.stringify(recipe.location));
  }

  return client.post(endpoint, data);
};

export default {
  getRecipes,
  addRecipe,
};
