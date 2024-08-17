// src/components/Albums.jsx
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ArtistContext } from "../context/ArtistContext";

const Albums = () => {
  const { albums } = useContext(ArtistContext);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = {};
      for (let album of albums) {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
        );
        photosData[album.id] = response.data;
      }
      setPhotos(photosData);
    };
    if (albums.length) {
      fetchPhotos();
    }
  }, [albums]);

  return (
    <div>
      <h3>Albums</h3>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <strong>{album.title}</strong>
            <div className="photos-grid">
              {photos[album.id] &&
                photos[album.id].map((photo) => (
                  <img
                    key={photo.id}
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
