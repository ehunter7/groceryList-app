import { firebase } from "../../firebase";

const recipeRef = firebase.firestore().collection("family");
const oldrecipeRef = firebase.firestore().collection("groceries");

export default {
  getRecipes: async () => {
    const recipes = [];
    await oldrecipeRef.get().then((res) => {
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
  addRecipe: async (recipe) => {
    const date = Date.now();
    const data = {
      id: date,
      recipe,
      createAt: date,
    };
    const recipes = [];
    await recipeRef
      .doc("Sg0v98QPYGUWWZYUhMOp")
      .get()
      .then((res) => {
        // res.forEach((doc) => {
        //   const { data } = doc.data();
        //   console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
        //   console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
        //   console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
        //   console.log(doc, "=>", doc.data());
        //   recipes.push({
        //     // id: doc.id,
        //     data,
        //   });
        // });
        res.data().data.map((recipe) => {
          recipes.push(recipe);
        });
      });

    recipes.push(data);
    const updatedRecipeList = {
      data: recipes,
    };
    await recipeRef
      .doc("Sg0v98QPYGUWWZYUhMOp")
      .update(updatedRecipeList)
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        alert(error);
      });
  },
};
