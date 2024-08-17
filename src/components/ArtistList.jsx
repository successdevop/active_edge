// src/components/ArtistList.jsx
import { useContext } from "react";
import { ArtistContext } from "../context/ArtistContext";
import { useNavigate } from "react-router-dom";

const ArtistList = () => {
  const { artists } = useContext(ArtistContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Artists in Chocolate City</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id} onClick={() => navigate(`/artist/${artist.id}`)}>
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
