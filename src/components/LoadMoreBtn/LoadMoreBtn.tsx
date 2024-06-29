import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  onLoadMoreBtn: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProp> = ({ onLoadMoreBtn }) => {
  return (
    <button type="button" onClick={onLoadMoreBtn} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
