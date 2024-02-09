import { useParams } from "react-router-dom";
import fetchSingleArticleByID from "./Utils/fetchSingleArticleByID";
import { useState, useEffect } from "react";
import SingleArticleCard from "./SingleArticleCard";
import ErrorPage from "./ErrorPage";

export default function ArticleCardDetails() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticleByID(article_id)
      .then(({ article }) => {
        setSingleArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  if (error) {
    return <ErrorPage message={error.err.response.data.msg} />;
  }

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
