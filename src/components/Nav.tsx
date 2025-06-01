import { Link } from 'react-router-dom';
const Nav = () => {
    // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/potentialcandidates">
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
