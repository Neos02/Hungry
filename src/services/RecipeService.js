import axios from "axios";

axios.defaults.baseURL = "http://192.168.4.25:8080/api";

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
