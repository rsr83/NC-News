import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <h1>NC NEWS</h1>
      <Link to={`/`}>
        <h3>Home</h3>
      </Link>
    </>
  );
}
