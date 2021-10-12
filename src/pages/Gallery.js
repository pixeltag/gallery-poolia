import React, { useState, useEffect } from "react";
import "../assets/css/Gallery.css";
import { getImagesServices } from "../libs/utils";
import ImgFigure from "../components/ImgFigure";
import ImgModal from "../components/ImgModal";

const Gallery = () => {
  const [imgData, setImgData] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getImagesServices()
      .then((res) => setImgData(res.data.images))
      .catch((err) => console.log(err));
  }, []);

  const openModal = (data) => {
    setImgPreview(data);
    setModal(true);
  };

  const closeModal = () => {
    setImgPreview(null);
    setModal(false);
  };

  return (
    <React.Fragment>
      <ImgModal
        {...imgPreview}
        modalStatus={modal}
        handleCloseModalCb={closeModal}
      />
      <div className="gallery-container">
        {imgData.length > 0
          ? imgData.map((img, index) => (
              <ImgFigure {...img} key={index} openModalCallback={openModal} />
            ))
          : "Not data"}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
