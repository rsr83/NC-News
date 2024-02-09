import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function fetchArticles(topic, sort_by, order) {
  if (topic === "null" || topic === null) {
    if (
      sort_by === null ||
      order === null ||
      sort_by === "null" ||
      order === "null"
    ) {
      (sort_by = "created_at"), (order = "DESC");
    }
    return myApi
      .get(`/articles?&sort_by=${sort_by}&order=${order}`)
      .then((response) => {
        return response.data;
      });
  } else {
    if (
      sort_by === null ||
      order === null ||
      sort_by === "null" ||
      order === "null"
    ) {
      (sort_by = "created_at"), (order = "DESC");
    }
    return myApi
      .get(`/articles?topic=${topic}&sort_by=${sort_by}&order=${order}`)
      .then((response) => {
        return response.data;
      });
  }
}
