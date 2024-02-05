export default function ArticleCard({ article }) {
  const {
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  return (
    <>
      <div class="article-card">
        <img src={article_img_url}></img>
        <h2>Title: {title}</h2>
        <h4>Topic: {topic}</h4>
        <h4>Author: {author}</h4>
        <h4>Created at: {created_at.slice(0, 10)}</h4>
        <h4>Votes: {votes}</h4>
      </div>
    </>
  );
}
