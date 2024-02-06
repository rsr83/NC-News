import { useParams } from "react-router-dom";
import fetchSingleArticleByID from "./Utils/fetchSingleArticleByID";
import { useState, useEffect } from "react";
import SingleArticleCard from "./SingleArticleCard";

export default function ArticleCardDetails() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticleByID(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SingleArticleCard singleArticle={singleArticle} />
      )}
    </>
  );
}
