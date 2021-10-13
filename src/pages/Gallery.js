import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/Gallery.css";
import { getImagesServices } from "../libs/utils";
import ImgFigure from "../components/ImgFigure";
import ImgModal from "../components/ImgModal";

const Gallery = () => {
  const [imgData, setImgData] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // get data from img service
    getImagesServices()
      .then((res) => setImgData(res.data.images))
      .catch((err) => console.log(err));
    
    // handle escape press 
    document.addEventListener('keydown', escapePressHandler, false);
  }, []);

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
        <h2 className="hide">Poolia Gallery</h2>
        {imgData.length > 0 ? (
          imgData.map((img, index) => (
            <ImgFigure {...img} key={index} openModalCallback={openModal} />
          ))
        ) : (
          <div className="not-found">Not data, try again later</div>
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
