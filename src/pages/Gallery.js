import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/Gallery.css";
import { fetchImages } from "../libs/utils";
import ImgFigure from "../components/ImgFigure";
import ImgModal from "../components/ImgModal";

const Gallery = () => {
  const [imgData, setImgData] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // get data from img service
    fetchImagesData();
  }, []);

  const fetchImagesData = useCallback(async () => {
    const response = await fetchImages();
    setImgData(response.images);
  }, []);

  useEffect(() =>  document.addEventListener("keydown", escapePressHandler, false));

  const openModal = (data) => {
    setImgPreview(data);
    setModal(true);
  };

  const closeModal = () => {
    setImgPreview(null);
    setModal(false);
  };

  const escapePressHandler = useCallback((e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  }, []);

  return (
    <React.Fragment>
      <section className="gallery-container">
        <h2 className="hide">Gallery Section</h2>
        {imgData.length > 0 ? (
          <div data-testid="list">
            {
              imgData.map((img, index) => (
              <ImgFigure {...img} key={index} openModalCallback={openModal} />
              ))
            }
          </div>
        ) : (
          <div className="not-found">Loading</div>
        )}
      </section>

      <ImgModal
        {...imgPreview}
        modalStatus={modal}
        handleCloseModalCb={closeModal}
      />
    </React.Fragment>
  );
};

export default Gallery;
