import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function fetchArticlesByTopic(topic) {
  return myApi.get(`/articles?topic=${topic}`).then((response) => {
    return response.data;
  });
}
