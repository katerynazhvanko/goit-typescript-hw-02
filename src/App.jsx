import { useEffect, useState } from "react";
import { fetchImages } from "./utils/images-api";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import toast from "react-hot-toast";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); //стан на пагінацію
  const [isLoading, setIsLoading] = useState(false); //стан на завантаження
  const [error, setError] = useState(false); // стан на появу помилки
  const [searchQuery, setSearchQuery] = useState(""); //стан для данних з пошуку
  // стани для модального вікна
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // get fetch
  const handleSearch = async (newQuery) => {
    console.log(newQuery);
    if (newQuery === searchQuery) {
      return toast.error("The same search query!");
    }
    setSearchQuery(newQuery);
    setPage(1); //для скидання сторінок при іншому пошуку
    setImages([]); //скидаємо масив данних, щоб новий пошук не додавався до нового
  };

  // +1 page
  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchQuery === "") {
      //перевіряємо, щоб не відбувався запит на пустий масив
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        }); // щоб не оновлювався пошук, а просто додавались нові
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, searchQuery]);

  //Modal Window
  const handleOpenModal = (modalContent) => {
    setOpenModal(true);
    setModalContent(modalContent);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )}
      {error && <ErrorMessage />}
      {openModal && (
        <ImageModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          modalImg={modalContent}
        />
      )}
    </>
  );
}
