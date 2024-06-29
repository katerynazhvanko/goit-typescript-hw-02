import { Field, Formik, Form, FormikHelpers } from "formik";
import { CiSearch } from "react-icons/ci";

import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(
          values: { query: string },
          actions: FormikHelpers<{ query: string }>
        ) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            <CiSearch size="25" />
          </button>
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
