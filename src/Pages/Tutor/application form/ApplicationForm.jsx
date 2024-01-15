// Import necessary components from @mui/material
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../../Constants/Constants";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

// Form component
const ApplicationForm = () => {
  const navigate = useNavigate();
  const tutor = useSelector((state) => {
    if (state.user.userInfo.role === "tutor") return state.user.userInfo;
  });
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageChange, setImageChange] = useState([]);
  const [categories, setCategories] = useState([]);

  let imageAddFile = null;
  // const [formData, setFormData] = useState({
  //   coursename: "",
  //   qualification: "",
  //   address: "",
  //   phoneNumber: "",
  //   experience: "",
  //   image: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  useEffect(() => {
    axios.get(`${BaseUrl}dashboard/categoriesList/`).then((res) => {
      setCategories(res.data);
      // console.log(categories, "categories");
    });
  }, []);
  // console.log(categories, "categories");

  const handleSubmit = async (e) => {
    const apiUrl = `${BaseUrl}course/courseAdding/${tutor.id}/`;
    const tokenDataString = localStorage.getItem("authToken");
    const tokenData = JSON.parse(tokenDataString);
    const accessToken = tokenData ? tokenData.access : null;
    const Course = new FormData();
    e.preventDefault();
    if (imageChange) {
      Course.append("image", imageChange);
    }
    Course.append("course_name", courseName);
    Course.append("description", description);
    Course.append("price", price);
    Course.append("category", selectedCategory);
    Course.append("tutor_id", tutor.id);
    for (const pair of Course.entries()) {
      console.log(pair[0], pair[1]);
    }
    console.log(tutor.id, "----------->>");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: Course,
      });
      if (!response.ok) {
        console.error(`Server error: ${response.status}`);
        return;
      }
      const responseData = await response.json();
      if (responseData.status === 200) {
        toast.success(responseData.message);
        navigate("/tutor/");
      } else {
        toast.error(responseData.message);
      }
    } catch (err) {
      console.log(err, "Error from Application form");
    }
    // try {
    //   axios.post(apiUrl, Course).then((response) => {
    //     console.log(response, "--------------------------->>>>>>>>");
    //     if (response.status === 201) {
    //       toast.success("Course Added Successfully");
    //       navigate("/tutor/");
    //       // Additional logic or navigation if needed
    //     } else if (response.data.status === 404) {
    //       toast.error("Wait For Your Approval");
    //     } else {
    //       toast.error("An unexpected error occurred. Please try again later.");
    //     }
    //   });
    // } catch (error) {
    //   console.error("Error:", error);
    //   toast.error("An error occurred. Please try again later.");
    // }
  };

  const handleFileChange = (e) => {
    imageAddFile = e.target.files[0];
    setImageChange(imageAddFile);
    // setImageChange(imageAddFile);
    // setSelectedFile(imageAddFile);
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <div className="w-screen flex justify-center pt-10 bg-gray-50">
        <div className="w-2/4">
          <h1>Add Course</h1>
        </div>
      </div>
      <div className="w-screen min-h-screen flex justify-center px-2  bg-gray-50">
        <div className="md:w-2/4 py-5 px-10 bg-white rounded-md border shadow-lg  h-fit">
          <form onSubmit={handleSubmit}>
            {/* <div className="md:flex gap-4">
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div> */}
            <div>
              <label>Categories:</label>
              <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <TextField
              label="Course Name"
              variant="outlined"
              name="coursename"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              variant="outlined"
              name="qualification"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              // label="Address"
              variant="outlined"
              type="file"
              // value={for}
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            {/* <TextField
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            /> */}
            <TextField
              label="Price"
              variant="outlined"
              name="experience"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
