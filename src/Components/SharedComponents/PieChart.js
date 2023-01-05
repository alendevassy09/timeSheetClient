import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import axios from "../../Axios";
function PieChartComponent(props) {
  let show=props.data
  let [week, setWeek] = useState({});
  let [month, setMonth] = useState();
  useEffect(() => {
    axios.get("admin/stats").then((response) => {
      console.log(response.data);
      setWeek(response.data);
    });
    axios.get("admin/monthstats").then((response) => {
      console.log(response.data, "asdfasdf");
      setMonth(response.data)
    });
  }, []);
  return (
    <Box>
        
      {show ? (
        <Box>
          <Typography variant="h4">This Week Stats</Typography>
          <Typography>pending:{week.pending ? week.pending : 0}</Typography>
          <Typography>Completed:{week.complete ? week.complete : 0}</Typography>

          <PieChart
            animation
            animationDuration={1000}
            animationEasing="ease-out"
            center={[50, 50]}
            data={[
              {
                color: "#ffeb3b",
                title: "Pending",
                value: week.pending ? week.pending : 0,
              },
              {
                color: "#ff7043",
                title: "Complete",
                value: week.complete ? week.complete : 0,
              },
            ]}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={50}
            paddingAngle={0}
            radius={50}
            startAngle={0}
            viewBoxSize={[100, 100]}
          />
          
        </Box>
      ) : (
        <Box>
          <Typography variant="h4">This Month Stats</Typography>
          <Typography>pending:{month.pending ? month.pending : 0}</Typography>
          <Typography>Completed:{month.complete ? month.complete : 0}</Typography>

          <PieChart
            animation
            animationDuration={1000}
            animationEasing="ease-out"
            center={[50, 50]}
            data={[
              {
                color: "#ffeb3b",
                title: "Pending",
                value: month.pending ? month.pending : 0,
              },
              {
                color: "#ff7043",
                title: "Complete",
                value: month.complete ? month.complete : 0,
              },
            ]}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={50}
            paddingAngle={0}
            radius={50}
            startAngle={0}
            viewBoxSize={[100, 100]}
          />
        </Box>
      )}
    </Box>
  );
}
export default PieChartComponent;
