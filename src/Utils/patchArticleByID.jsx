import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function patchArticleByID(article_id, body) {
  return myApi.patch(`/articles/${article_id}`, body).then((response) => {
    return response.data;
  });
}
