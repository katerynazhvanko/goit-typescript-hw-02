import { Field, Formik, Form, FormikHelpers } from "formik";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

interface SearchBarProp {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(
          values: { query: string },
          actions: FormikHelpers<{ query: string }>
        ) => {
          if (values.query.trim() === "") {
            toast.error("Please, add valid text");
            actions.setSubmitting(false);
            return;
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
};

export default SearchBar;
