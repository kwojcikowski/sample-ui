import "./SignupPage.css";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Cofirm password is required")
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    age: Yup.number()
      .min(1, "Age must be greater than 0")
  });

const SignupPage = () => {

    return <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", confirmPassword: "", age: 0 }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form model="" name="Signup" noValidate onSubmit={handleSubmit}>
                <span>Signup</span>
                
                <input
                  model-attribute=""
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <p model-attribute="" id="emailErrorMessage" className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  model-attribute=""
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p model-attribute="" id="passwordErrorMessage" className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  model-attribute=""
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Confirm password"
                  className="form-control"
                />
                <p model-attribute="" id="confirmPasswordErrorMessage" className="error">
                  {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </p>

                <input
                  model-attribute=""
                  id="age"
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="Enter age"
                  className="form-control"
                />
                <p model-attribute="" id="ageErrorMessage" className="error">
                  {errors.age && touched.age && errors.age}
                </p>

                <button id="submitButton" type="submit" disabled={!(isValid && dirty)}>Sign Up</button>

                <constraint>
                    inv errorIsDisplayedWhenPasswordIsTooShort:
                    self.password &#60;&#62; '' and self.password.size() &#60; 8
                    implies self.passwordErrorMessage = 'Password must be at least 8 characters'

                    inv errorIsDisplayedWhenPasswordsDontMatch:
                    self.password &#60;&#62; '' and self.confirmPassword &#60;&#62; '' and self.password &#60;&#62; self.confirmPassword
                    implies self.confirmPasswordErrorMessage = 'Passwords must match'

                    inv errorIsDisplayedWhenAgeNonPositive:
                    self.age &#60;&#62; '' and self.age.toInteger() &#60; 0
                    implies self.ageErrorMessage = 'Age must be greater than 0'

                    inv submitDisabledOnErrors:
                    self.email = '' or self.emailErrorMessage &#60;&#62; ''
                    or self.password = '' or self.passwordErrorMessage &#60;&#62; ''
                    or self.confirmPassword = '' or self.confirmPasswordErrorMessage &#60;&#62; ''
                    or self.age = '' or self.ageErrorMessage &#60;&#62; ''
                    implies self.getElementAttribute('submitButton', 'disabled') = 'true'
                </constraint>
                <test name="testCorrectFormValues">
                    sut.setEmail("mail@mail.com");
                    sut.setPassword("mypassword");
                    sut.setConfirmPassword("mypassword");
                    sut.setAge("35");
                </test>
                <test name="testIncorrectFormValues">
                    sut.setEmail("incorrect");
                    sut.setPassword("a");
                    sut.setConfirmPassword("b");
                    sut.setAge("-1");
                </test>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
}


export default SignupPage;