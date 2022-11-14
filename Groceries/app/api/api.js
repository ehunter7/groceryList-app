import { useContext } from "react";
import { auth, firebase } from "../../firebase";
import AuthContext from "../auth/context";
import { query, where } from "firebase/firestore";

// recipe ref collection name will need to be renamed
const recipeRef = firebase.firestore().collection("family");
const oldrecipeRef = firebase.firestore().collection("groceries");
const familiesRef = firebase.firestore().collection("families");

const user = auth.currentUser;
export default {
  getRecipes: async (family) => {
    console.log("family", family);
    const recipes = [];
    await recipeRef
      .doc(family)
      .get()
      .then((res) => {
        console.log("res 19", res);
        const recipeShuttle = res.data();
        console.log("22", recipeShuttle);
        if (!recipeShuttle) {
          console.log("No Results!");
        } else {
          recipeShuttle.data.map((doc) => {
            recipes.push(doc);
          });
        }
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
    // TODO: should be able to do this in one call
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
    return updatedRecipeList;
  },

  //----------Families------------------
  addFamily: async (family) => {
    const ids = [];
    await familiesRef
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
  //TODO: This needs to be done better. I need o
  getFamily: async (userid) => {
    let famName = "";

    const snapshot = await familiesRef
      .where("userIds", "array-contains", userid)
      .get();

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    var shuttle = [];
    snapshot.forEach((doc) => {
      shuttle.push(doc.id);
    });

    // await familiesRef
    //   .get()
    //   .then((res) => {
    //     res.forEach((doc) => {
    //       const { userIds } = doc.data();
    //       userIds.map((id) => {
    //         if (id === userid) {
    //           famName = doc.data().name;
    //         }
    //       });
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("Error getting document:", error);
    //     return;
    //   });
    // console.log("result", result);
    return shuttle;
  },
};
