import { NavLink } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const Blog = () => {
  let { allData, loading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  let newData = [];
  if (allData && allData.length > 0) {
    newData = allData.slice(0, 12);
  }
  return (
    <div className="container-blog">
      {loading === false &&
        newData &&
        newData.length > 0 &&
        newData.map((item, index) => {
          return (
            <div className="single-blog" key={item.id}>
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="content">{item.body}</div>
              <NavLink to={`/blog/${item.id}`}>View Detail</NavLink>
            </div>
          );
        })}
      {loading === true && <div>Loading data...</div>}
    </div>
  );
};

export default Blog;
