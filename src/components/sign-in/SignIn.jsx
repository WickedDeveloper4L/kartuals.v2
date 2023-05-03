import React from "react";

import FormInput from "../form-input/FormInput";
import "./signIn.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = details;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  return (
    <div className="signin_con">
      <div className="sign-in">
        <h2>I Already have an Account</h2>
        <span>please input your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            value={email}
            required
            handleChange={handleChange}
            label="email"
            name="email"
          />

          <FormInput
            type="password"
            value={password}
            required
            handleChange={handleChange}
            label="password"
            name="password"
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              <FcGoogle style={{ fontSize: "25px", margin: "0 auto" }} />
            </CustomButton>
          </div>
        </form>
        <Link className="create" to="/signup">
          create an account
        </Link>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
