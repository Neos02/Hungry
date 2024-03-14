import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_HUNGRY_API_BASE_URL;

export const getAllRecipes = (successCallback, errorCallback) => {
  axios
    .get("/recipes")
    .then(successCallback)
    .catch((error) => {
      if (errorCallback) {
        errorCallback(error);
      } else {
        console.log(error);
      }
    });
};

export const getRecipesInCategory = (
  category,
  successCallback,
  errorCallback
) => {
  axios
    .get(`/categories?name=${category}`)
    .then(successCallback)
    .catch((error) => {
      if (errorCallback) {
        errorCallback();
      } else {
        console.log(error);
      }
    });
};
