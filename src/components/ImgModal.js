import closeIcon from "../assets/svg/close.svg";

const ImgModal = ({
  full,
  description,
  title,
  modalStatus,
  handleCloseModalCb,
}) => {
  const handleCloseModal = () => {
    handleCloseModalCb();
  };
  return (
    <div className={modalStatus ? "modal show" : "modal"}>
      <img
        src={closeIcon}
        alt="Close modal"
        className="close-btn"
        onClick={() => handleCloseModal()}
      />
      <img className="modal-img" src={full} alt={title} />
      <div className="modal-body">
        <h3>{title ? title : 'Image title'}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImgModal;
