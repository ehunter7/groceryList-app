import { useContext } from "react";
import { auth, firebase } from "../../firebase";
import AuthContext from "../auth/context";

const recipeRef = firebase.firestore().collection("family");
const oldrecipeRef = firebase.firestore().collection("groceries");
const familiesRef = firebase.firestore().collection("families");

const user = auth.currentUser;
export default {
  getRecipes: async (family) => {
    const recipes = [];
    await recipeRef
      .doc(family)
      .get()
      .then((res) => {
        const recipeShuttle = res.data();

        recipeShuttle.data.map((doc) => {
          recipes.push(doc);
        });
        // alert("Boom!");
      })
      .catch((error) => console.log("damnit bobby", error));
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log(recipes);
    return recipes;
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
  addRecipe: async (recipe, family) => {
    const date = Date.now();
    const data = {
      id: date,
      recipe,
      createAt: date,
    };
    const recipes = [];
    await recipeRef
      .doc(family)
      .get()
      .then((res) => {
        res.data().data.map((recipe) => {
          recipes.push(recipe);
        });
      })
      .catch((error) => console.log(error));

    recipes.push(data);
    const updatedRecipeList = {
      data: recipes,
    };
    await recipeRef
      .doc(family)
      .set(updatedRecipeList)
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        alert(error);
      });
  },

  //----------Families------------------
  addFamily: async (family) => {
    const ids = [];
    familiesRef
      .doc(family.name)
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (doc.data().password !== family.password) {
            alert("Invalid Family name or Password");
            return;
          }
          const users = doc.data().userIds;
          for (var key in users) {
            ids.push(users[key]);
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return;
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        return;
      });
    ids.push(user.uid);
    const fam = {
      ...family,
      userIds: ids,
    };

    await familiesRef
      .doc(family.name)
      .set(fam)
      .then(() => {
        return family.name;
      })
      .catch((error) => alert(error));
    // await familiesRef
    //   .add(family)
    //   .then((res) => alert("Family Created!"))
    //   .catch((error) => alert(error));
  },
  getFamily: async (userid) => {
    let famName = "";
    await familiesRef
      .get()
      .then((res) => {
        res.forEach((doc) => {
          const { userIds } = doc.data();
          userIds.map((id) => {
            if (id === userid) {
              famName = doc.data().name;
            }
          });
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        return;
      });
    return famName;
  },
};
