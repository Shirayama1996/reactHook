import { NavLink } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  let { allData, loading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    true
  );
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (allData && allData.length > 0) {
      let data = allData.slice(0, 12);
      setNewData(data);
    }
  }, [allData]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };

  const deleteBlog = (id) => {
    let data = newData;
    let currentData = data.filter((item) => item.id != id);
    setNewData(currentData);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="my-3">
        + Add new blog
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>
      <div className="container-blog">
        {loading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item, index) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <h3 style={{ float: "left" }}>{item.title}</h3>
                  <button onClick={() => deleteBlog(item.id)}>
                    X delete blog
                  </button>
                </div>
                <div className="content">{item.body}</div>
                <NavLink to={`/blog/${item.id}`}>View Detail</NavLink>
              </div>
            );
          })}
        {loading === true && <div>Loading data...</div>}
      </div>
    </>
  );
};

export default Blog;
