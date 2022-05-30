import client from "./client";

// const endpoint = "/listings";

// const getRecipes = () => client.get(endpoint);

// const addRecipe = (recipe, onUploadProgress) => {
//   const data = new FormData();
//   data.append("title", recipe.title);
//   data.append("price", recipe.description);
//   data.append("categoryId", recipe.category.value);
//   data.append("description", recipe.instructions);

//   //TODO Need to build logic for when there is no image uploaded.
//   // if (recipe.images.length > 0) {
//   // recipe.images.foreach(
//   //   (image, index) =>
//   data.append("images", {
//     name: "image" + 44,
//     type: "image/jpeg",
//     // uri: recipe.images[0],
//     uri: recipe.image,
//   });
//   // );
//   // }

//   // if (recipe.location) {
//   //   data.append("location", JSON.stringify(recipe.location));
//   // }

//   return client.post(endpoint, data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

// export default {
//   getRecipes,
//   addRecipe,
// };
//`````````````````````````````````````````````````````````````````````````````````````````````
// import { initializeApp } from "firebase/app";
// import { getFirestore, setDoc, doc } from "firebase/firestore";
// import firebaseConfig from "../../firebase";
// // const firebaseConfig = firebaseConfig; // apiKey, authDomain, etc. (see above)

// initializeApp(firebaseConfig);

// const firestore = getFirestore();

// await setDoc(doc(firestore, "groceries", "recipes"), {});
