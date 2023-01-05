import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from '../../Axios'
import $ from "jquery";
function TimeSheet(){
    let [task,setTask]=useState([])
    useEffect(() => {
        axios.get('admin/timesheet').then((response) => {
          console.log(response.data);
          setTask(response.data);
          $(document).ready(function () {
            $("#example").DataTable();
          });
        });
      }, []);
    return(
        <Box sx={{padding:1}}>
            <table id="example" class="display">
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>No of User</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {task.map((obj) => {
            return (
              <tr>
                <td>{obj.time }</td>
                <td>{obj.end}</td>
                <td>{obj.users.length}</td>
                <td>{obj.status?"completed":"pending"}</td>
              </tr>
            );
          })}

          {/* <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
           
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            
          </tr> */}
        </tbody>
      </table>
        </Box>
    )
}

export default TimeSheet