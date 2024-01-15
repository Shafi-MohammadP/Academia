import React, { useState, useEffect } from "react";
import { BaseUrl } from "../../../Constants/Constants";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";
const CourseManagement = () => {
  const [course, setCourse] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const apiUrl = `${BaseUrl}dashboard/courseList/`;

    try {
      axios.get(apiUrl).then((res) => {
        setCourse(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err, "error found");
    }
  }, [change]);
  const handleApproval = (id) => {
    console.log(id, "id of course");
    const apiUrl = `${BaseUrl}dashboard/courseApproval/${id}/`;

    try {
      axios.patch(apiUrl).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setChange(!change);
          toast.success("Approved Successfully");
        } else {
          toast.error("Something Went Wrong");
        }
      });
    } catch (err) {
      console.log(err, "Error During Approval");
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Teacher Name</TableCell>
              <TableCell align="left">Corse Name</TableCell>
              <TableCell align="left">Corse Image</TableCell>
              {/* <TableCell align="right"></TableCell> */}
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course.map((value, key) => (
              <TableRow
                // key={value.tutor}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {value.tutor_profile.tutor_details.username}
                </TableCell>
                <TableCell>{value.course_name}</TableCell>
                {/* <Button onClick={handleOpen}>View</Button> */}
                <TableCell>
                  <img
                    className="cursor-pointer"
                    src={value.image}
                    style={{ width: "100px", height: "100px" }}
                    alt="certificate"
                    onClick={() => handleOpen(value.certificate)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {value.price}
                </TableCell>
                {value.is_available ? (
                  <TableCell align="left" className="text-back">
                    <span
                      className="rounded-pill btn"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Available
                    </span>
                  </TableCell>
                ) : (
                  <TableCell align="left" className="text-back">
                    <span
                      className="rounded-pill btn"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      unavailable
                    </span>
                  </TableCell>
                )}

                <TableCell align="right"></TableCell>
                <TableCell>
                  {value.is_available ? (
                    <Button
                      className="bg-red-900"
                      onClick={() => handleApproval(value.id)}
                    >
                      DisApprove
                    </Button>
                  ) : (
                    <Button
                      className="bg-green-900"
                      onClick={() => handleApproval(value.id)}
                    >
                      Approve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CourseManagement;
