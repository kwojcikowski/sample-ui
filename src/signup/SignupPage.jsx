import "./SignupPage.css";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    age: Yup.number()
      .min(0, "Age must be greater than 0")
  });

const SignupPage = () => {

    return <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", confirmPassword: "", age: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Signup</span>
                
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Confirm password"
                  className="form-control"
                />
                <p className="error">
                  {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </p>

                <input
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="Enter age"
                  className="form-control"
                />
                <p className="error">
                  {errors.age && touched.age && errors.age}
                </p>

                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
}


export default SignupPage;