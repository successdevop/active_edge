// src/components/ArtistList.jsx
import { useContext } from "react";
import { ArtistContext } from "../context/ArtistContext";
import { useNavigate } from "react-router-dom";

const ArtistList = () => {
  const { artists } = useContext(ArtistContext);
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <h2 className="text-[1.1rem] lg:text-[1.5rem] font-bold">
        Artists in Chocolate City
      </h2>
      <ul className="flex mt-8 flex-wrap gap-3 lg:gap-6 justify-center">
        {artists.map((artist) => (
          <li
            key={artist.id}
            onClick={() => navigate(`/artist/${artist.id}`)}
            className="cursor-pointer p-2 lg:py-3 lg:px-6 bg-white text-violet-500 rounded lg:rounded-lg lg:text-2xl"
          >
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
