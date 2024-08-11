import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./Reservation.module.css";
import { validationSchema } from "../utils/validationSchema.js";

const Reservation = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values) => {
    onSubmit(values);
    window.location.reload();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.text}>
              Stay connected! We are always ready to help you.
            </p>
            <div className={css.fieldWrapper}>
              <Field
                className={css.input}
                name="name"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.fieldWrapper}>
              <Field
                className={css.input}
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.fieldWrapper}>
              <Field
                className={css.input}
                name="date"
                type="date"
                placeholder="Booking date"
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>
            <div className={css.fieldWrapper}>
              <Field
                as="textarea"
                className={css.textarea}
                name="comment"
                placeholder="Comment"
                rows={5}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>
            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Reservation;
