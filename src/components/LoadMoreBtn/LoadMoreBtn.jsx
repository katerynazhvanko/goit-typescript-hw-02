import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMoreBtn }) {
  return (
    <button type="button" onClick={onLoadMoreBtn} className={css.button}>
      Load more
    </button>
  );
}
