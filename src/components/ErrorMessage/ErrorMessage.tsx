import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div>
      <p className={css.text}>Oops! Error! Reload!</p>
    </div>
  );
};
export default ErrorMessage;
