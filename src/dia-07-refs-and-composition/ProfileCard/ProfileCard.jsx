/* eslint-disable react/prop-types */
import "./ProfileCard.styles.css";
import { ProfileCardImage } from "./ProfileCardImage";
import { ProfileCardUser } from "./ProfileCardUser";

function ProfileCard({ image, userName = "Convidado" }) {
  return (
    <div className="card-container">
      <ProfileCardImage image={image} userName={userName} />
      <ProfileCardUser userName={userName} />
    </div>
  );
}

export { ProfileCard };
