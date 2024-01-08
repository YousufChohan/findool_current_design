import React from "react";
import "./Signup.css";
import "../../App.css";
import logo from "../../Assets/Images/logo2.png";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-box">
          <img src={logo} alt="Findool Logo" />
          <h2 className="s-heading">Sign Up</h2>
          <h2 className="sub-heading">Create your account</h2>
          <Form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Name */}
            <Form.Group controlId="formBasicName">
              <InputGroup>
                <InputGroup.Text style={{ background: "#fff" }}>
                  <div className="icon-outline">
                    <i class="fa-solid fa-user" style={{ color: "#000" }}></i>
                  </div>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Username" />
              </InputGroup>
            </Form.Group>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <InputGroup.Text style={{ background: "#fff" }}>
                  <div className="icon-outline">
                    <i
                      class="fa-solid fa-envelope"
                      style={{ color: "#000" }}
                    ></i>
                  </div>
                </InputGroup.Text>
                <Form.Control type="email" placeholder="Email" />
              </InputGroup>{" "}
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
              <InputGroup>
                <InputGroup.Text style={{ background: "#fff" }}>
                  <div className="icon-outline">
                    <i class="fa-solid fa-lock" style={{ color: "#000" }}></i>
                  </div>
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
              </InputGroup>{" "}
            </Form.Group>

            {/*confirm password */}
            <Form.Group controlId="formBasicConfirmPassoword">
              <InputGroup>
                <InputGroup.Text style={{ background: "#fff" }}>
                  <div className="icon-outline">
                    <i class="fa-solid fa-lock" style={{ color: "#000" }}></i>
                  </div>
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Confirm Password" />
              </InputGroup>{" "}
            </Form.Group>

            {/* submit button */}
            <Button className="s-button" type="submit">
              Sign Up
            </Button>
          </Form>
          <p className="s-text">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#000" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
