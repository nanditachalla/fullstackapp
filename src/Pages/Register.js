import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { Redirect } from "react-router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useState } from "react";

function Register(props) {
  //let history = useHistory();
  //const { selectedValue } = this.state;
  const initialValues = {
    name: "",
    description: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    address: "",
  };

  const onSubmit = (data) => {
    console.log(data);
    if (data.role === "donor") {
      axios.post("http://localhost:3001/User", data).then((res) => {
        //<Redirect to="/samplePage" />;
      });
    } else {
      axios.post("http://localhost:3001/acceptor", data).then((res) => {
        //<Redirect to="/samplePage" />;
      });
      // console.log("Organizatiion");
      // console.log(data);
      // console.log(data.role);
    }
    props.history.push("/samplePage");

    //console.log(props);
  };

  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Require name"),
    descriprion: Yup.string(),
    phone: Yup.string().min(10).max(10).required("Require num"),
    email: Yup.string().required("Require email!"),
    password: Yup.string()

      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is Required!"),
    role: Yup.string().required("Required"),
  });
  //const [show, setShowField] = useState(false);
  return (
    <div
      className="Register"
      style={{
        backgroundImage: `url('https://cdn.vox-cdn.com/thumbor/OTaHOVtIR6t8L0doPD-Kq6XYqeA=/0x0:1754x1241/1200x800/filters:focal(737x481:1017x761)/cdn.vox-cdn.com/uploads/chorus_image/image/68040475/GettyImages_1060748862.0.jpg')`,
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <Form className="Form1" autoComplete="on">
          <h1 style={{ color: "yellow" }}>Register today as a user!</h1>
          <div className="username">
            <label>Username:</label>

            <ErrorMessage name="name" component="span" />
            <Field
              id="inputUser"
              name="name"
              placeholder="Eg. Nandita Challa"
            />
          </div>
          <div className="description">
            <label>Description:</label>
            <Field
              id="inputDesc"
              name="description"
              placeholder="Eg. Student, Volunteer"
            />
          </div>
          <div className="description">
            <label style={{ fontSize: "large" }}>Choose one: </label>
            <ErrorMessage name="role" component="span" />
            <Field
              component="select"
              name="role"
              id="role"
              //value={selectedValue}
              placeholder="select one"
              // onChange={(value) => {
              //   if (value === "charity") {
              //     setShowField(true);
              //   }
              // }}
            >
              <option value="select one">Select an item</option>
              <option value="donor">Donor</option>
              <option value="charity">Charity organization</option>
            </Field>
          </div>

          {/* {show ? (
            <div className="phone">
              <label>Address:</label>
              <ErrorMessage name="address" component="span" />
              <Field
                id="inputPhone"
                name="address"
                placeholder="Eg. flat No.1,hyderabad"
              />
            </div>
          ) : null} */}

          <div className="phone">
            <label>Phone:</label>
            <ErrorMessage name="phone" component="span" />
            <Field id="inputPhone" name="phone" placeholder="Eg. 8978561901" />
          </div>
          <div className="email">
            <label>Email:</label>
            <ErrorMessage name="email" component="span" />
            <Field id="email1" name="email" placeholder="Eg. hello@abc.com" />
          </div>
          <div className="password1">
            <label>Password:</label>
            <ErrorMessage name="password" component="span" />
            <Field
              id="password1"
              name="password"
              type="password"
              placeholder="Hello123"
            />
          </div>
          <div className="submit">
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
      <div className="log">
        <Link to="/samplepage" style={{ color: "black", fontWeight: "bold" }}>
          Already have an account?
        </Link>
      </div>
      <div className="note">
        <h3>Note:</h3>
        <text>1.Password must contain 8 characters minimum.</text>
        <text>2.Password must contain both letters and numbers.</text>
      </div>
    </div>
  );
}

export default Register;
