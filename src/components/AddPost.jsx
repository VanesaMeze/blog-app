import { useEffect, useState } from "react";
import { editPostById, getPostById, postPosts } from "../service/postsService";
import { useNavigate, useParams } from "react-router";

const AddPost = () => {
  const [state, setState] = useState({
    title: "",
    text: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setState(data);
        console.log(data);
      });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setState({
      title: "",
      text: "",
    });
  };

  const handleSubmit = (event, state) => {
    event.preventDefault();
    if (state.title < 2 || state.text > 300 || state.text < 2) {
      alert(
        "Title mora biti duzi jednak dvojci, content mora biti duzi jednak dvojci"
      );

      return;
    }

    postPosts(state.title, state.text);
    if (id) {
      editPostById(id, state);
    } else {
      setState({
        title: "",
        text: "",
      });
    }
    navigate("/posts");
  };

  return (
    <form
      className="container mt-5"
      onSubmit={(event) => handleSubmit(event, state)}
    >
      <h3 className="label">Post:</h3>
      <div className="form-floating mt-3">
        <input
          name="title"
          value={state.title}
          onChange={handleInputChange}
          type="text"
          className="form-control"
        />
        <label>Title</label>
      </div>
      <div className="form-floating mt-3">
        <input
          name="text"
          value={state.text}
          onChange={handleInputChange}
          type="text"
          className="form-control"
        />
        <label>Content</label>
      </div>
      <br></br>
      <hr></hr>
      <button
        type="submit"
        onClick={(event) => handleSubmit(event, state)}
        className="btn btn-light"
      >
        Add
      </button>{" "}
      <button
        type="edit"
        onClick={(event) => editPostById(id)}
        className="btn btn-light"
      >
        Edit
      </button>{" "}
      <button type="reset" className="btn btn-light" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default AddPost;
