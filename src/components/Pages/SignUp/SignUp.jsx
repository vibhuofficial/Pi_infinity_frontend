import React, { useState } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import GoogleImg from "../../../assets/google.png";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const auth = getAuth(app);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [showLoader, setShowLoader] = useState(false);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUp = () => {
    setShowLoader(true);
    createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowLoader(false);
        setFormFields({
          email: "",
          password: "",
          confirmPassword: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  return (
    <>
      <section>
        <div className="signIn">
          <div className=" loginWrapper">
            <div className="card">
              <Backdrop
                sx={{
                  color: "#000",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={showLoader}
                className="formLoader"
                // onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <h3>Sign Up</h3>
              <form action="" className="signIn-form">
                <div className="form-group">
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    onChange={onChangeField}
                    value={formFields.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="password"
                    label="Password"
                    name="password"
                    type={showPassword === false ? "password" : "text"}
                    fullWidth
                    onChange={onChangeField}
                    value={formFields.password}
                    required
                  />
                  <Button
                    className="icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div>
                {/* <div className="form-group">
                  <TextField
                    id="confirm_password"
                    label="Confirm Password"
                    name="confirm_password"
                    type={showPassword1 === false ? "password" : "text"}
                    fullWidth
                    onChange={onChangeField}
                    value={formFields.confirmPassword}
                  />
                  <Button
                    className="icon"
                    onClick={() => setShowPassword1(!showPassword1)}
                  >
                    {showPassword1 === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div> */}
                <div className="form-group">
                  <Button className="btn-in" fullWidth onClick={signUp}>
                    <p>Sign Up</p>
                  </Button>
                </div>
                <p className="link">
                  Already have an account <Link to="/signIn">SignIn</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
