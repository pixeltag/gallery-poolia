import { useCallback, useEffect } from "react";

const ImgFigure = ({ title, src, full, description, openModalCallback }) => {
  const handleOpenModal = () => {
    openModalCallback({ full, description, title });
  };

  const enterPressHandler = useCallback((e) => {
    if (e.keyCode === 13) {
      document.activeElement.click();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", enterPressHandler, false);
  }, [enterPressHandler]);

  return (
    <figure
      className="img-figure"
      onClick={() => handleOpenModal()}
      tabIndex="0"
    >
      <img src={src} alt={title} />
      <figcaption className="title-figure">
        <h3>{title ? title : "Image title"}</h3>
      </figcaption>
    </figure>
  );
};

export default ImgFigure;
