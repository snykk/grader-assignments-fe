const Card = ({ photo }) => {
  return (
    <div className="card">
      <img className="card-image" src={photo.imageUrl} alt={photo.id} />
      <div className="card-content">
        <p className="captions" data-testid="photo-caption">{photo.captions}</p>
      </div>
    </div>
  );
};

export default Card;
