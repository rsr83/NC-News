import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function postCommentByArticleID(article_id, body) {
  return myApi
    .post(`/articles/${article_id}/comments`, body)
    .then((response) => {
      return response.data;
    });
}
