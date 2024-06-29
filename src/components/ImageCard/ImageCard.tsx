import { Image } from "../../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  item: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div style={{ height: "100%" }}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={onClick}
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
