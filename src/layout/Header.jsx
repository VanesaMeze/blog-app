import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" to={`/`}>
                <button className="btn btn-light">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={`/posts`}>
                <button className="btn btn-light">Posts</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={`/addPost`}>
                <button className="btn btn-light">Add Post</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
