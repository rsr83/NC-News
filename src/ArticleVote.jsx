import { useEffect, useState } from "react";
import patchArticleByID from "./Utils/patchArticleByID";

export default function ArticleVote({
  article_id,
  votesActual,
  setVotesActual,
}) {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const body = { inc_votes: votes };

  useEffect(() => {
    patchArticleByID(article_id, body).then(() => {});
  }, [votesActual]);

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
