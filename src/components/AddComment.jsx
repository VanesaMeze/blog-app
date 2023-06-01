import { useState } from "react";
import { addComment } from "../service/postsService";

const AddComment = ({ postId, handleAddComment }) => {
  const [comment, SetComment] = useState({
    text: "",
  });

  const handleCommentTextInputChange = (e) => {
    SetComment((prevState) => {
      return { ...prevState, text: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.text.length == 0) {
      return alert("Komentar mora sadrzati bar 1 karakter");
    }
    addComment(comment, postId)
      .then((response) => {
        console.log(response);
        handleAddComment(comment);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => SetComment((prevState) => ({ ...prevState, text: "" })));
  };

  return (
    <div>
      <form
        className="container mt-5"
        onSubmit={(event) => submitHandler(event, comment)}
      >
        <label>Comment:</label>
        <br></br>
        <input
          onChange={handleCommentTextInputChange}
          // className="form-control container"
          className="form-control"
          name="text"
          type="text"
          required
        ></input>
        <br></br>
        <button type="submit" className="btn btn-outline-light">
          Add Comment
        </button>
      </form>
    </div>
  );
};
export default AddComment;
