/* eslint-disable react/prop-types */

function ProfileCardImage({ image, userName }) {
  return (
    <div className="card-image">
      <img src={image} alt={userName} />
    </div>
  );
}

export { ProfileCardImage };
