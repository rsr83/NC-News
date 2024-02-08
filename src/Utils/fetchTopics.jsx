import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function fetchTopics() {
  return myApi.get(`/topics`).then((response) => {
    return response.data;
  });
}
