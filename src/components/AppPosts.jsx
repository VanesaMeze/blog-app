import { useEffect } from "react";
import { useState } from "react";
import { deletePostById, getAll } from "../service/postsService";
import { Link } from "react-router-dom/dist";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll().then(({ data }) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Da li ste sigurni da želite obrisati automobil?"
    );
    if (shouldDelete) {
      deletePostById(id);
      getAll().then(({ data }) => setPosts(data));
    }
  };

  return (
    <div className="container mt-6">
      {posts.map((post, id) => (
        <div className="posts" key={id}>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{post.title}</h3>
                <hr></hr>
                <div className="mb-1 text-body-secondary">
                  {post.created_at}
                </div>
                <small className="card-text mb-auto">{post.text}</small>
                <br></br>
                <div>
                  <Link to={`/posts/${post.id}`}>
                    <button className="btn btn-light">View post</button>
                  </Link>{" "}
                  <Link to={`/edit/${post.id}`}>
                    <button className="btn btn-light">Edit</button>
                  </Link>{" "}
                  <button
                    type="delete"
                    className="btn btn-light"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppPosts;
