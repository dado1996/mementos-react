const Card = ({ image, selected, ...field }) => {
  return (
    <div className="card" {...field}>
      <div className={selected ? "selected" : null}>
        <img src={image} alt="one piece" className="card-face" />

        <img
          src="/assets/one-piece.png"
          className="card-back"
          alt="one piece"
        />
      </div>
    </div>
  );
};

export default Card;
