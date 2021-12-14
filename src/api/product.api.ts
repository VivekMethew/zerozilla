import API from "./axios";

export const getCategories = (url: any) => {
  return new Promise(async (resolve, reject) => {
    await API.get(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
