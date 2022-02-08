import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ SentDate, open, setOpen }) => {
  const [value, setValue] = useState({
    title: "",
    text: "",
    author: "",
    date: "",
  });

  const [image, setImage] = useState(undefined);

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handle_image = (e) => {
    setImage(e.target.files[0]);
  };

  const SendDate = () => {
    let formData = new FormData();
    formData.append("title", value.title);
    formData.append("text", value.text);
    formData.append("author", value.author);
    formData.append("date", value.date);
    formData.append("image", image);

    SentDate(formData);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h4
        style={{
          paddingTop: 5,
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
        News Page
      </h4>
      <Button
        color="primary"
        style={{ marginLeft: 1150, marginTop: -5 }}
        onClick={handleOpen}
      >
        News
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Input
              type="text"
              placeholder="Title"
              value={value.title}
              onChange={handleChange("title")}
            />
            <Input
              type="text"
              placeholder="Text"
              value={value.text}
              onChange={handleChange("text")}
            />
            <Input
              type="text"
              placeholder="Author"
              value={value.author}
              onChange={handleChange("author")}
            />
            <Input
              type="date"
              placeholder="Add Time"
              value={value.date}
              onChange={handleChange("date")}
            />
            <Input
              type="file"
              name="file"
              placeholder="Image"
              value={value.image}
              onChange={handle_image}
            />
            <Button color="primary" onClick={handleClose}>
              Close
            </Button>
            <Button
              color="primary"
              onClick={() => {
                SendDate();
              }}
            >
              Add
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const BasicTable = () => {
  const [data, setData] = useState([]);

  const [update, setUpdate] = useState(false);

  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/news").then((v) => {
      setData(v.data);
    });
  }, [update, setData]);

  const editData = (id) => {
    navigate(`/edit/${id}`);
  };

  const SendDate = (data) => {
    axios.post("http://localhost:5000/api/news", data).then((v) => {
      if (v.status === 200) {
        setOpen(false);
        setUpdate(!update);
      }
    });
  };

  const deleteData = (id) => {
    let Check = window.confirm("Do you want to delete ?");
    if (Check === true) {
      axios.delete(`http://localhost:5000/api/news/${id}`).then((v) => {
        setUpdate(!update);
      });
    } else {
      setUpdate(!update);
    }
  };

  return (
    <TableContainer component={Paper}>
      <BasicModal SentDate={SendDate} setOpen={setOpen} open={open} />
      <Table sx={{ minWidth: 650, marginTop: 2 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#acf" }}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Category Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Text</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.text}</TableCell>
              <TableCell align="right">{item.author}</TableCell>
              <TableCell align="right">{item.data}</TableCell>
              <TableCell align="right">
                <img src={item.image} style={{ width: 60, height: 50 }} />
              </TableCell>
              <TableCell align="right">
                {<EditIcon color="success" onClick={() => editData(item.id)} />}
              </TableCell>
              <TableCell align="right">
                {
                  <DeleteIcon
                    color="error"
                    onClick={() => deleteData(item.id)}
                  />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
