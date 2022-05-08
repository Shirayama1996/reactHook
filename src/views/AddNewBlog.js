import "./Blog.scss";
import { useState } from "react";
import axios from "axios";

const AddNewBlog = (props) => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title) {
      alert("title is invalid");
      return;
    }
    if (!content) {
      alert("content is invalid");
      return;
    }
    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };
  return (
    <div className="blog-form">
      <div className="text-add-new">---Add new blogs---</div>
      <div className="input-data">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="input-data">
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>

      <button className="btn-add-new" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBlog;
