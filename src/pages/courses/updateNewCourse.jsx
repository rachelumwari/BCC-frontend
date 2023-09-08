/* eslint-disable */
/* eslint-disable-next-line*/
import React from "react";
import "./updateNewCourse.css";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  MailOutline,
  PhoneAndroid,
  LocationSearching,
  Publish,
} from "@material-ui/icons";

export default function UpdateNewCoure() {
  return (
    <div className="course">
      <div className="courseUpdateContainer">
        <div className="courseUpdate">
          <span className="courseUpdateTitle">Edit Course Name</span>
          <form className="courseUpdateForm">
            <div className="courseUpdateLeft">
              <div className="courseUpdateItem">
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="courseName"
                  className="courseUpdateInput"
                />
              </div>
            </div>
            <div className="courseUpdateRight">
              <div className="courseUpdateUpload"></div>
              <button className="courseUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
