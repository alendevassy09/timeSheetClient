import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "../../Axios";
import { Box } from "@mui/material";
export default function TodayTasks() {
  let [today, setTask] = React.useState([]);
  React.useEffect(() => {
    axios.get("admin/todayTask").then((response) => {
        console.log(response.data);
      setTask(response.data);
    });
  }, []);
  return (
    <List sx={{ width: "100%",height:"80%",overflowY:"scroll", bgcolor: "background.paper" }}>
      {today.map((obj) => {
        return (
          <>
            <ListItem alignItems="flex-start" >
                <Box>
                <ListItemText
                primary={"Task Name :"+obj.tname}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Description
                    </Typography>
                    {" — "+obj.description}
                  </React.Fragment>
                }
                
              />
              <ListItemText
               
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Status : 
                    </Typography>
                    {obj.status?"completed":"pending"}
                  </React.Fragment>
                }
                
              />
                </Box>
              
            </ListItem>
            <Divider variant="" component="li" />
          </>
        );
      })}
    </List>
  );
}
