import client from "./client";

const endpoint = "/listings";

const getRecipes = () => client.get(endpoint);

const addRecipe = (recipe) => {
  const data = new FormData();
  data.append("title", recipe.title);
  data.append("price", recipe.description);
  data.append("categoryId", recipe.category.value);
  data.append("description", recipe.instructions);

  //TODO Need to build logic for when there is no image uploaded.
  // if (recipe.images.length > 0) {
  // recipe.images.foreach(
  //   (image, index) =>
  data.append("images", {
    name: "image" + 44,
    type: "image/jpeg",
    // uri: recipe.images[0],
    uri: recipe.image,
  });
  // );
  // }

  // if (recipe.location) {
  //   data.append("location", JSON.stringify(recipe.location));
  // }

  return client.post(endpoint, data, {
    onUploadProgress: (progress) => console.log(progress),
  });
};

export default {
  getRecipes,
  addRecipe,
};
