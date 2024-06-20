import { Link } from 'react-router-dom';

export const NotFoundRoute = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/join" replace>
        Go to Join
      </Link>
    </div>
  );
};
