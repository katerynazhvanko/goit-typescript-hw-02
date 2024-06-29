import { Field, Formik, Form } from "formik";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            return toast.error("Please, add valid text");
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            <CiSearch size="25" />
          </button>
          <Toaster position="top-right" />
          <Field
            autoComplete="off"
            autoFocus
            type="text"
            name="query"
            placeholder="Search images and photos"
            className={css.input}
          />
        </Form>
      </Formik>
    </header>
  );
}
