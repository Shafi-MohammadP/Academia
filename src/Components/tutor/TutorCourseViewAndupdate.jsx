import React from "react";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../Constants/Constants";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { Button } from "@material-tailwind/react";
const TutorCoursesView = () => {
  const [courseDetails, setCourseDetailView] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const apiUrl = `${BaseUrl}course/courseDetailview/${id}/`;
    try {
      axios.get(apiUrl).then((res) => {
        console.log(res.data, "Course Details View");
        setCourseDetailView(res.data);
      });
    } catch (err) {
      console.log(err, "error Found");
    }
  }, []);
  return (
    <>
      <div>
        <h1 className="flex text-center justify-center">Course Details View</h1>
      </div>

      {courseDetails ? (
        <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
          {/* image gallery */}

          <div className="container mx-auto px-4">
            {/* Your image gallery code
             */}
            <img
              src={courseDetails.image}
              alt="card-image"
              className="w-full h-100 object-cover"
            />
            {/* <Button className='flex align-middle w-45 h-24' color="green">Chat</Button> */}
          </div>

          {/* description */}
          <div className="mx-auto px-5 lg:px-5">
            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              Course Name : {courseDetails.course_name}
            </h2>
            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              Course Description : {courseDetails.description}
            </h2>

            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              Price : ₹ {courseDetails.price}
            </h2>

            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              {/* Location : {employeeData.place} */}
            </h2>
            <h2 className="pt-3 text-2xl font-bold lg:pt-0">
              {/* Experience : {employeeData.experience} year */}
            </h2>
            <p className="pt-3 text-xs font-bold lg:pt-0">
              {/* Description : {employeeData.description}  */}
            </p>
            <Button className="bg-green-900">Edit Course</Button>
            {/* <AvailableDates  empId={employeeData.id} empdetails={employeeData.charge}/> */}
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TutorCoursesView;
