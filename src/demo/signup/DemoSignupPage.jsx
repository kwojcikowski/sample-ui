import "./DemoSignupPage.css";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    age: Yup.number()
      .min(18, "You must be at least 18 years old.")
  });

const DemoSignupPage = () => {

    return <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", age: 0 }}
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
              <form model="DemoSignup" noValidate onSubmit={handleSubmit}>
                <span>Signup</span>
                
                <input
                  model-attribute="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <p model-attribute="emailErrorMessage" id="emailErrorMessage" className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  model-attribute="age"
                  id="age"
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="Enter age"
                  className="form-control"
                />
                <p model-attribute="ageErrorMessage" id="ageErrorMessage" className="error">
                  {errors.age && touched.age && errors.age}
                </p>

                <button id="submitButton" type="submit" disabled={!(isValid && dirty)}>Sign Up</button>

                <constraint>
                    inv errorIsDisplayedWhenEmailIsEmpty:
                    self.email = '' implies self.emailErrorMessage = 'Email is a required field'

                    inv errorIsDisplayedWhenAgeNonPositive:
                    self.age &#60;&#62; '' and self.age.toInteger() &#60; 0
                    implies self.ageErrorMessage = 'Age must be greater than 0'

                    inv submitDisabledOnErrors:
                    self.email = '' or self.emailErrorMessage &#60;&#62; ''
                    or self.age = '' or self.ageErrorMessage &#60;&#62; ''
                    implies self.getElementAttribute('submitButton', 'disabled') = 'true'
                </constraint>
                <test name="testCorrectFormValues">
                    sut.setEmail("mail@mail.com");
                    sut.setAge("35");
                </test>
                <test name="testIncorrectFormValues">
                    sut.setEmail("incorrect");
                    sut.setAge("-1");
                </test>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
}


export default DemoSignupPage;