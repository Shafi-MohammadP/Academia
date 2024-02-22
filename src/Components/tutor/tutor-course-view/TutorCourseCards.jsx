import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const TutorCourseCards = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("courseUpdate/", { state: { course: item } });
  };
  console.log(item);
  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={item.image} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{item.course_name}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {""}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {""}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <Button onClick={handleClick}>View Course details</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorCourseCards;
