import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
function SamplePage() {
  let history = useHistory();
  //const [email, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (data) => {
    //const data = { email: email, password: password };
    axios.post("http://localhost:3001/User/login", data).then((response) => {
      console.log(response.data);

      console.log(data);
      if (!response.data.error) {
        history.push("/Home");
      }
    });

    console.log("OK!");
  };
  const validateSchema = Yup.object().shape({
    email: Yup.string().required("Require email"),

    password: Yup.string().min(8).required("Require password"),
  });
  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url('https://image.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg')`,
        flex: 1,
      }}
    >
      <h1 className="heading1">Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <Form className="Form2" autoComplete="on">
          <div className="userid">
            <label>UserId/Email</label>
            <ErrorMessage name="email" component="span" />
            <Field
              id="email"
              name="email"
              placeholder="Eg. nanditachalla@onnet.com"
              // onChange={(event) => {
              //   setUsername(event.target.value);
              // }}
            />
          </div>
          <div className="password">
            <label>Password</label>
            <ErrorMessage name="password" component="span" />
            <Field
              id="password"
              name="password"
              type="password"
              // onChange={(event) => {
              //   setPassword(event.target.value);
              // }}
            />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <div style={{ textAlign: "center" }}>
        <h1>If you have forgottem your password</h1>
        <h1>Please click the below for further action</h1>
        <Link to="/Home" style={{ fontSize: "large" }}>
          forgort password?
        </Link>
      </div>
    </div>
  );
}

export default SamplePage;
