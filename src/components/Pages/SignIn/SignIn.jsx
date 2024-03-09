import React, { useState } from "react";
import "./SignIn.css";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import GoogleImg from "../../../assets/google.png";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { useContext } from "react";

const auth = getAuth(app);

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showLoader, setShowLoader] = useState(false);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const myContext = useContext(AppContext);

  const history = useNavigate();

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));
  };

  const signIn = () => {
    setShowLoader(true);

    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setShowLoader(false);
        setFormFields({
          email: "",
          password: "",
        });

        localStorage.setItem("isLogin", true);
        // myContext.signIn();

        history("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
              <h3>Sign In</h3>
              <form action="" className="signIn-form">
                <div className="form-group">
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={onChangeField}
                    value={formFields.email}
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="password"
                    label="Password"
                    name="password"
                    type={showPassword === false ? "password" : "text"}
                    onChange={onChangeField}
                    value={formFields.password}
                    fullWidth
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
                <div className="form-group">
                  <Button className="btn-in" fullWidth onClick={signIn}>
                    <p>Sign In</p>
                  </Button>
                </div>
                <p>OR</p>
                <div className="form-group signInOr">
                  <Button variant="outlined" fullWidth>
                    <img src={GoogleImg} /> Sign In with Google
                  </Button>
                </div>
                <p className="link">
                  Not have an account <Link to="/signUp">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
