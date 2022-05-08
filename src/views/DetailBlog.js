import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  let { allData, loading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    true
  );
  const handleGetBack = () => {
    history.push("/blog");
  };
  return (
    <>
      <div className="blog-detail">
        <div>
          <b>Blog ID: {id} </b>
          {allData.title}
        </div>
        <div>{allData.body}</div>
      </div>
      <button onClick={handleGetBack}>Back</button>
    </>
  );
};

export default DetailBlog;
