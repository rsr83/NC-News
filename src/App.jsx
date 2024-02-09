import Articles from "./Articles";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ArticleCardDetails from "./ArticleCardDetail";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

export default function App() {
  const test = "test";
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCardDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
