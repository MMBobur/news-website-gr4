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
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/category`)
      .then((resp) => {
        setCategory(resp.data);
      })
      .catch((err) => alert(err));
  }, []);

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const [categoryId, setCategoryId] = useState(undefined);

  const handleChangeSelect = (event) => {
    setCategoryId(event.target.value);
  };

  const handle_image = (e) => {
    setImage(e.target.files[0]);
  };

  const SendDate = () => {
    console.log(categoryId);
    let formData = new FormData();
    formData.append("category_id", categoryId);
    formData.append("title", value.title);
    formData.append("text", value.text);
    formData.append("author", value.author);
    formData.append("date", value.date);
    formData.append("image", image);

    SentDate(formData);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "center",
          padding: 10,
          borderRadius: 5,
          backgroundColor: 'orange',
          color: "white",
        }}
      >
        <span
          style={{
            width: 120,
            height: '50px',
            fontWeight: 500,
            borderRadius: 5,
            backgroundColor: "#1976c0",
          }}
        >
         <p style={{marginTop: 12}}> News Page </p>
         </span>

        <div>
          <Button
            sx={{ height: "50px", marginRight: "20px" }}
            variant="contained"
            onClick={handleOpen}
          >
            News
          </Button>
          <Button
            sx={{ height: "50px",}}
            variant="contained"
            color="success"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add News
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="text"
              label="Title"
              value={value.title}
              onChange={handleChange("title")}
            />
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="text"
              label="Text"
              value={value.text}
              onChange={handleChange("text")}
            />
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="text"
              label="Author"
              value={value.author}
              onChange={handleChange("author")}
            />
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="date"
              value={value.date}
              onChange={handleChange("date")}
            />
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="file"
              name="file"
              value={value.image}
              onChange={handle_image}
            />
            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={category}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField sx={{ mt: 2 }} {...params} label="Category" />
              )}
            /> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoryId}
              label="category"
              onChange={handleChangeSelect}
            >
              {category.map((v) => {
                return <MenuItem value={v.id}>{v.name}</MenuItem>;
              })}
            </Select>
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
                onClick={() => {
                  SendDate();
                }}
              >
                Add
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Close
              </Button>
            </span>
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

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [deleteId, setDeleteId] = useState("");

  const OK = () => {
    axios.delete(`http://localhost:5000/api/news/${deleteId}`).then((v) => {
      console.log(v);
      if (v.status === 200) {
        setOpen1(false);
        setUpdate(!update);
      } else {
        setOpen1(false);
      }
    });
  };
  const NO = () => {
    console.log("This is NO Button ");
    handleClose1();
  };
  const deleteData = (id) => {
    setDeleteId(id);
    handleOpen1();
  };

  return (
    <>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ textAlign: "center", color: "darkred" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Do you want to delete ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: "20px 0",
              }}
            >
              <Button variant="contained" color="success" onClick={() => OK()}>
                Yes
              </Button>
              <Button variant="contained" color="error" onClick={() => NO()}>
                No
              </Button>
            </span>
          </Typography>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <BasicModal SentDate={SendDate} setOpen={setOpen} open={open} />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#1976c0" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>Id</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Category Id
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Title
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Text
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Author
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Data
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Image
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Edit
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.category_id}</TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.text}</TableCell>
                <TableCell align="right">{item.author}</TableCell>
                <TableCell align="right">{item.data}</TableCell>
                <TableCell align="right">
                  <img
                    src={item.image}
                    alt="Img"
                    style={{ width: 60, height: 60 }}
                  />
                </TableCell>
                <TableCell align="right">
                  {
                    <EditIcon
                      color="success"
                      onClick={() => editData(item.id)}
                    />
                  }
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
    </>
  );
};
export default BasicTable;
