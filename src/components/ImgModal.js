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
    <div data-testid="modal" className={modalStatus ? "modal show" : "modal"}>
      <button onClick={() => handleCloseModal()} className="close-btn">
        <img src={closeIcon} alt="Close modal" />
      </button>
      <img data-testid="img" className="modal-img" src={full} alt={title} />
      <div className="modal-body">
        <h3 data-testid="title">{title ? title : "Image title"}</h3>
        <p data-testid="description">{description}</p>
      </div>
    </div>
  );
};

export default ImgModal;
