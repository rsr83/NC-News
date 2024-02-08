export default function CommentCard({ comment }) {
  const { body, author, created_at } = comment;

  return (
    <div className="comment-card">
      <p>{body}</p>
      <p>comment by: {author}</p>
      <p>created at: {created_at.slice(0, 10)}</p>
    </div>
  );
}
