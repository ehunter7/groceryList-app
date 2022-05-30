import { firebase } from "../../firebase";

const recipeRef = firebase.firestore().collection("groceries");

export default {
  getRecipes: async () => {
    const recipes = [];
    await recipeRef.get().then((res) => {
      res.forEach((doc) => {
        const { heading } = doc.data();
        recipes.push({
          id: doc.id,
          heading,
        });
      });

      alert("Boom!");
    });

    return recipes;
    // recipeRef.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
    //   const recipes = [];
    //   querySnapshot.forEach((doc) => {
    //     const { heading } = doc.data();
    //     recipes.push({
    //       id: doc.id,
    //       heading,
    //     });
    //   });
    //   return recipes;
    // });
  },
  deleteRecipes: (recipe) => {
    recipeRef
      .doc(recipe.id)
      .delete()
      .then(() => {
        alert("deleted successfully");
      })
      .catch((error) => {
        alert(error);
      });
  },
  addRecipe: (recipe) => {
    console.log("recipe api", recipe);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const data = {
      heading: recipe,
      createAt: timestamp,
    };
    recipeRef
      .add(data)
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        alert(error);
      });
  },
};
