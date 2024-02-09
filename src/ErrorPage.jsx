import { Link } from "react-router-dom";

export default function ErrorPage({ message }) {
  console.log(message);
  return (
    <>
      <h2>ERROR: {message}</h2>
      <Link to={`/`}>
        <h3>Home</h3>
      </Link>
    </>
  );
}
