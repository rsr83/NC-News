export default function CommentCard({ comment }) {
  const { body, author, created_at } = comment;

  return (
    <div className="comment-card">
      <h5>
        {body} <br /> comment by: {author} <br />
        created at: {created_at.slice(0, 10)}
      </h5>
    </div>
  );
}
