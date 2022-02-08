import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Edit = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/news/${id}`).then((v) => {
      setTitle(v.data.title);
      setText(v.data.text);
      setAuthor(v.data.author);
      setDate(v.data.date);
    });
  }, [id]);

  const upDate = () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("author", author);
    formData.append("date", date);
    formData.append("image", image);

    axios
      .put(`http://localhost:5000/api/news/${id}`, formData)
      .then((resp) => {
        navigate(`/News`);
      })
      .catch((err) => alert(err));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          paddingTop: 10,
          color: "#1976c0",
          textAlign: "center",
          fontSize: 25,
          fontWeight: 600,
          borderRadius: 5,
          width: 150,
          height: 30,
        }}
      >
        Edit Page
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 2,
          width: 500,
        }}
      >
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          label="Title"
          color="primary"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          sx={{ mt: 1 }}
          label="Text"
          color="primary"
          fullWidth
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          sx={{ mt: 1 }}
          label="Author"
          color="primary"
          fullWidth
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <TextField
          sx={{ mt: 1 }}
          label="Date"
          color="primary"
          fullWidth
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          sx={{ mt: 1 }}
          color="primary"
          fullWidth
          type="file"
          name="file"
          src={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={() => upDate()}
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            color="error"
            type="submit"
            onClick={() => navigate(`/News`)}
          >
            Close
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Edit;
