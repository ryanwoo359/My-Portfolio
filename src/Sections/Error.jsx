import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
