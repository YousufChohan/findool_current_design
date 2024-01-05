import React from "react";
import "../App.css";
const JobCard = () => (
  <div className="job-card-wrapper">
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
      <i class="fa-solid fa-eye" style={{ color: "#000" }}></i>
      <i class="fa-solid fa-heart" style={{ color: "#000" }}></i>
      <i class="fa-solid fa-share" style={{ color: "#000" }}></i>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="job-icon">
        <i
          class="fa-solid fa-briefcase --fa-primary-color"
          style={{ color: "#fff", fontSize: 48 }}
        ></i>
      </span>
      <p className="job-title">
        Independent Contractor for Students Transportation
      </p>
    </div>
    <div className="job-card-content">
      <p>Pay/Salary: $45.00-$75.00 Project</p>
      <p>www.amaservinghearts.com</p>
    </div>
    <div className="job-card-content2">
      <p className="job-card-address">
        Seattle, Renton, Bellvue, Kirkland & more
      </p>
      <p className="job-card-date">04/29/23</p>
    </div>
    <div className="job-card-buttons">
      <button className="login-button">Apply Now</button>
      <button
        className="login-button"
        style={{ borderColor: "#0089cf", backgroundColor: "#0089cf" }}
      >
        Save
      </button>
    </div>
  </div>
);

export default JobCard;
