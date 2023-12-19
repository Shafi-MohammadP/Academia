// Import necessary components from @mui/material
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Form component
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    qualification: "",
    address: "",
    phoneNumber: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-screen flex justify-center pt-10 bg-gray-50">
        <div className="w-2/4">
          <h1>Aplication Form</h1>
        </div>
      </div>
      <div className="w-screen min-h-screen flex justify-center px-2  bg-gray-50">
        <div className="md:w-2/4 py-5 px-10 bg-white rounded-md border shadow-lg  h-fit">
          <form onSubmit={handleSubmit}>
            <div className="md:flex gap-4">
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
            </div>
            <TextField
              label="Qualification"
              variant="outlined"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Experience"
              variant="outlined"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
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
