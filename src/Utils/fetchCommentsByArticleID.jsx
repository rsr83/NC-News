import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function fetchCommentsByArticleID(article_id) {
  return myApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}
