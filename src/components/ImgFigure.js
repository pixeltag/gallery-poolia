const ImgFigure = ({ title, src, full , description ,  openModalCallback }) => {
    

    const handleOpenModal = () => {
        openModalCallback({ full, description, title });
  };

  return (
    <figure className="img-figure" onClick={() => handleOpenModal()}>
      <img src={src} alt={title} />
      <figcaption className="title-figure">
        <h3>{title}</h3>
      </figcaption>
    </figure>
  );
};

export default ImgFigure;