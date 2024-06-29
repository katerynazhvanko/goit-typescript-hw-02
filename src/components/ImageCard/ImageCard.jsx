import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div style={{ height: "100%" }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        className={css.img}
      />
    </div>
  );
}
