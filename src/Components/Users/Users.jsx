import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { AddCircle } from "@mui/icons-material";
import axios from "../../Axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
function Users() {
  const [age, setAge] = React.useState("");

  const handle = (event) => {
    setAge(event.target.value);
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [users, setusers] = useState([]);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axios.get("/admin").then((response) => {
      console.log(response.data);
      setusers(response.data);
      $(document).ready(function () {
        $("#example").DataTable();
      });
    });
  }, []);
  useEffect(() => {
    // $(document).ready(function () {
    //   $("#example").DataTable();
    // });
  }, [users]);
  function submit() {
    axios
      .post("admin/addUser", { fname, lname, email, password: values.password,position:age })
      .then((response) => {
        setusers((obj)=>[{ fname, lname, email, password: values.password,position:age },...obj])
        $(document).ready(function () {
            $("#example").DataTable()
          });
        setOpen(false);
      });
  }
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 2 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New User
          </Typography>
          <TextField
          required
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            label="First Name"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
          />
          <TextField
          required
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            label="Last Name"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
          />
         
          <TextField
          type={"email"}
          required
            value={email}
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            label="Email"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ marginTop: 1 }}
          />
          <Typography sx={{ marginTop: 1 }}>Select Role</Typography>
          <FormControl fullWidth>
            <Select
              sx={{ marginTop: 1 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              size="small"
              onChange={handle}
            >
              <MenuItem value={"Tester"}>Tester</MenuItem>
              <MenuItem value={"Designer"}>Designer</MenuItem>
              <MenuItem value={"Back-end developer"}>Back-end developer</MenuItem>
              <MenuItem value={"Front-end developer"}>Front-end developer</MenuItem>
            
            </Select>
          </FormControl>
          {/* <Typography sx={{ marginTop: 1 }}>Enter Password</Typography>
          <FormControl sx={{ width: "100%", marginTop: 1 }} variant="outlined">
            <OutlinedInput
              size="small"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
          {/* <Typography sx={{ marginTop: 1 }}>Confirm Password</Typography> */}
          {/* <FormControl sx={{ width: "100%", marginTop: 1 }} variant="outlined">
            <OutlinedInput
              value={Cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              size="small"
              id="outlined-adornment-password"
              type={"password"}
            />
          </FormControl> */}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            <Button onClick={() => submit()} variant="contained">
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{ margin: 1 }}
        startIcon={<AddCircle />}
      >
        New User
      </Button>
      <table id="example" class="display">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>

          </tr>
        </thead>
        <tbody>
          {users.map((obj) => {
            return (
              <tr>
                <td>{obj.fname }</td>
                <td>{obj.lname}</td>
                <td>{obj.email}</td>
                <td>{obj.position}</td>
              </tr>
            );
          })}

          {/* <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
          </tr> */}
        </tbody>
      </table>
    </Box>
  );
}

export default Users;
