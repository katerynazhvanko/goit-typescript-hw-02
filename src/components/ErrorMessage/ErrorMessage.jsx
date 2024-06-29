import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <p className={css.text}>Oops! Error! Reload!</p>
    </div>
  );
}
