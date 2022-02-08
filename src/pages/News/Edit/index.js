import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@mui/material";

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
    <div>
      <p
        style={{
          paddingTop: 10,
          backgroundColor: "#acf",
          color: "white",
          borderRadius: 5,
          textAlign: "center",
          marginBottom: -25,
          marginLeft: 50,
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
          alignItems: "center",
          paddingTop: 2,
        }}
      >
        <Input
          color="primary"
          style={{ width: 400, paddingTop: 5 }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          color="primary"
          style={{ width: 400, paddingTop: 5 }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          color="primary"
          style={{ width: 400, paddingTop: 5 }}
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Input
          color="primary"
          style={{ width: 400, paddingTop: 5 }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          color="primary"
          style={{ width: 400, paddingTop: 5 }}
          type="file"
          name="file"
          src={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button color="error" type="submit" onClick={() => navigate(`/News`)}>
          Cancel
        </Button>
        <Button color="success" type="submit" onClick={() => upDate()}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Edit;
