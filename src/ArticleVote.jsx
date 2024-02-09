import { useEffect, useState } from "react";
import patchArticleByID from "./Utils/patchArticleByID";
import ErrorPage from "./ErrorPage";

export default function ArticleVote({
  article_id,
  votesActual,
  setVotesActual,
}) {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);
  const body = { inc_votes: votes };

  useEffect(() => {
    patchArticleByID(article_id, body)
      .then(() => {})
      .catch((err) => {
        setError({ err });
      });
  }, [votesActual]);

  if (error) {
    return <ErrorPage message={error.err.response.data.msg} />;
  }

  if (hasVoted === false) {
    return (
      <>
        <button
          onClick={() => {
            setVotes(votes + 1);
            setVotesActual(votesActual + 1);
            setHasVoted(true);
          }}
        >
          LIKE
        </button>
        <button
          onClick={() => {
            setVotes(votes - 1);
            setVotesActual(votesActual - 1);
            setHasVoted(true);
          }}
        >
          DISLIKE
        </button>
      </>
    );
  } else {
    return <h3>Thanks for voting!!</h3>;
  }
}
