import { AddCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import TaskCard from "../TaskCard/TaskCard";
import axios from "../../Axios";
import { taskContext } from "../../context";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function Tasks() {
  const [task, setTask] = useState([]);
  const [tname, setTname] = useState("");
  const [time, setTime] = useState("");
  const[end,setEnd]=useState('')
  const [description, setDescription] = useState("");
  const [name, setName] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [personName, setPersonName] = React.useState([]);
  const [show, setShow] = useState([]);
  const handleChange = (event) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  useEffect(() => {
    axios.get("/admin").then((response) => {
      setName(response.data);
    });
    axios.get("/admin/getTask").then((response) => {
      console.log(response.data);
      setTask(response.data);
    });
  }, []);
  function add() {
    axios
      .post("admin/addTask", { time, tname,end, description, users: personName })
      .then((response) => {
        console.log(response.data,'sdafas');
        setTask(response.data);
        setTname("");
        setDescription("");
        setTime("");
        setPersonName([]);
        setOpen(false);
      });
  }

  function get(e) {}
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        padding: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Task
          </Typography>
          <TextField
            label="Task Name"
            value={tname}
            onChange={(e) => {
              setTname(e.target.value);
            }}
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
          />

          <FormControl sx={{ marginTop: 1, marginBottom: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={(e) => {
                get(e);
                handleChange(e);
              }}
              input={<OutlinedInput label="Users" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {name.map((obj) => (
                <MenuItem key={obj._id} value={obj.fname}>
                  <Checkbox checked={personName.indexOf(obj.fname) > -1} />
                  <ListItemText primary={obj.fname} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Typography sx={{ marginRight: 1 }}>  Start Time: </Typography>
            <input
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              type="time"
              style={{ border: "none" }}
            />
            <Typography sx={{ marginRight: 1 }}>  End Time: </Typography>
            <input
              value={end}
              onChange={(e) => {
                setEnd(e.target.value);
              }}
              type="time"
              style={{ border: "none" }}
            />
          </Box>

          <TextField
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            sx={{ marginTop: 1 }}
            id="outlined-multiline-static"
            label="description"
            multiline
            rows={4}
            fullWidth
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            <Button
              onClick={() => {
                add();
              }}
              variant="contained"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ width: "90%", display: "flex" }}>
        <Box>
          <Typography variant="h4">Tasks</Typography>
        </Box>
        <Box>
          <Button
            onClick={handleOpen}
            variant="outlined"
            sx={{ marginLeft: 3 }}
            startIcon={<AddCircle />}
          >
            Add
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",
          height: "100%",
          marginBottom: 1,
          overflowX: "hidden",
          overflowY: "scroll",
          display: "flex",
          position: "relative",
        }}
      >
        <taskContext.Provider value={{ task, setTask }}>
          <Box
            sx={{
              width: "70%",
              height: "100%",
              marginBottom: 1,
            }}
          >
            {task.map((obj) => {
              return <TaskCard data={obj}></TaskCard>;
            })}
          </Box>
        </taskContext.Provider>
      </Box>
    </Box>
  );
}

export default Tasks;
