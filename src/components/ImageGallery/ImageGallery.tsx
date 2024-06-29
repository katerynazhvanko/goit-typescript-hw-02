import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../App/App.types";
import css from "./ImageGallery.module.css";

interface ImageGallery {
  items: Image[];
  onOpenModal: (item: Image) => void;
}

const ImageGallery: React.FC<ImageGallery> = ({ items, onOpenModal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onOpenModal(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
