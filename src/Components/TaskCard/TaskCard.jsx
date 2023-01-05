import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { taskContext } from "../../context";
import axios from "../../Axios";
export default function TaskCard(props) {
  let { task, setTask } = React.useContext(taskContext);
    
  let data = props.data;
  let [disable,setDisable]=React.useState(data.status?true:false)
  function remove(id) {
    axios.patch("admin/remove", { id }).then((response) => {});
  }
  function finish(id) {
    axios.patch("admin/finish", { id }).then((response) => {

    });
  }
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: "whitesmoke", marginBottom: 1 }}
    >
      <CardContent>
        <Typography variant="h5" color="" gutterBottom>
 
        </Typography>
        <Typography component="div">Task : {data.tname}</Typography>
        <Typography component="div" sx={{ display: "flex" }}>
          Assigned to :
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {data.users.map((obj) => {
              return (
                <Typography sx={{ marginLeft: 1 }} component="div">
                  {obj.fname + " " + obj.lname}
                </Typography>
              );
            })}
          </Box>
        </Typography>
        <Typography component="div">
          Description : {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        disabled={disable}
          onClick={() => {
            remove(data._id);
            setTask(
              task.filter((obj) => {
                return obj._id != data._id;
              })
            );
          }}
          size="small"
        >
        Cancel
        </Button>
        <Button
        
        disabled={disable}
          onClick={() => {
            finish(data._id);
            setDisable(true)
          }}
          size="small"
        >
        Finish
        </Button>
      </CardActions>
    </Card>
  );
}
