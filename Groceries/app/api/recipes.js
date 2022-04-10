import client from "./client";

const endpoint = "/listings";

const getRecipes = () => client.get(endpoint);

export default {
  getRecipes,
};
