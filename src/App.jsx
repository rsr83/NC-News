import Articles from "./Articles";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ArticleCardDetails from "./ArticleCardDetail";

export default function App() {
  const test = "test";
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCardDetails />} />
      </Routes>
    </>
  );
}
