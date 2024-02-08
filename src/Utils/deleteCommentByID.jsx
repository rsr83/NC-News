import axios from "axios";

const myApi = axios.create({
  baseURL: "https://rafaels-nc-news.onrender.com/api",
});

export default async function deleteCommentByID(comment_id) {
  return myApi.delete(`/comments/${comment_id}/`).then(() => {});
}
