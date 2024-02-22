// CommentsSection.js
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ApplicationConfig, BaseUrl } from "../../../Constants/Constants";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@mui/material";

const CommentsSection = ({ user, calculateDate, videoId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [managePage, setManagePage] = useState(false);
  const handlePostComment = async () => {
    const apiUrl = `${BaseUrl}course/video_comment/`;
    if (newComment.trim() === "") {
      toast.error("Field cannot be empty");
      return;
    }
    const data = {
      user: user.user_id,
      video: videoId,
      text: newComment,
    };
    try {
      const response = await axios.post(apiUrl, data, ApplicationConfig);
      if (response.status === 201) {
        setNewComment("");
        toast.success(response.data.message);
        console.log(newComment, "newCOmment");
        setManagePage(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    setManagePage(false);
    const commentListUrl = `${BaseUrl}course/video_comment_list/${videoId}/`;
    axios
      .get(commentListUrl)
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err, "error in comment list");
      });
  }, [managePage]);
  return (
    <div>
      <Row className="mt-2">
        <Col md={11}>
          <Input
            value={newComment}
            placeholder="add your comment here"
            className="w-full"
            onChange={(e) => setNewComment(e.target.value)}
          ></Input>
        </Col>
        <Col md={1}>
          <Button className="w-full" onClick={() => handlePostComment()}>
            Post
          </Button>
        </Col>
      </Row>

      {/* Existing comments section */}
      {comments.length !== 0 ? (
        <>
          {comments
            .slice() // Create a copy of the array to avoid mutating the original
            .sort((a, b) => (a.user.id === user.user_id ? -1 : 1))
            .map((comment) => (
              <div
                key={comment.id}
                className="comment-container border p-3 mb-3 mt-2"
              >
                <Row className="mb-2">
                  <Col md={1} className="flex items-center rounded">
                    <img
                      className="mt-1 w-16 h-16 rounded-full"
                      src={
                        comment.student_profile_photo !== null
                          ? comment.student_profile_photo
                          : comment.tutor_profile_photo
                      }
                      alt={comment.user.username}
                    />
                  </Col>
                  <Col md={11}>
                    <div className="ml-2 relative flex items-start">
                      <div>
                        <p className="mb-1 mt-3">
                          <span className="txt text-2xl font-bold">
                            {comment.user.username}
                          </span>{" "}
                          <span className="txt text-sm">
                            {calculateDate(comment.created_at)}
                          </span>
                        </p>
                        <p className="txt">{comment.text}</p>
                      </div>
                      {user.user_id === comment.user.id ? (
                        <i className="ri-pencil-line absolute top-0 right-0 text-2xl"></i>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
        </>
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default CommentsSection;
