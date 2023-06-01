import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "../service/postsService";
import AddComment from "../components/AddComment";
import useFormattedDate from "../useFormattedDate";

const SinglePost = () => {
  const [state, setState] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setState(data);
        setComments(data.comments);
        // console.log("asd", data);
      });
    }
  }, []);

  const formattedCreatedAt = useFormattedDate(state.createdAt);

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="row g-5">
      <div className="col-md-8">
        <br></br>
        <h3 className="pb-4 mb-4 fst-italic border-bottom">{state.title}</h3>
        <article className="blog-post">
          <p>{state.text}</p>
          <small>Created at: {formattedCreatedAt}</small>
        </article>
      </div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>{comment.createdAt}</p>
        </div>
      ))}

      <AddComment postId={id} handleAddComment={handleAddComment} />
    </div>
  );
};

export default SinglePost;
