import { useParams, useHistory } from "react-router-dom";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const handleGetBack = () => {
    history.push("/blog");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", width: "100%" }}>
        Hello, your id is {id}
      </h1>
      <button onClick={handleGetBack}>Back</button>
    </>
  );
};

export default DetailBlog;
