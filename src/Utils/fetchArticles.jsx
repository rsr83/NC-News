import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function fetchArticles() {
  return myApi.get(`/articles`).then((response) => {
    return response.data;
  });
}
