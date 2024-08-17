// src/pages/ArtistDetail.jsx
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../context/ArtistContext";
import Albums from "../components/Albums";
import Tweets from "../components/Tweets";

const ArtistDetail = () => {
  const { id } = useParams();
  const { fetchAlbums, fetchTweets } = useContext(ArtistContext);

  useEffect(() => {
    fetchAlbums(id);
    fetchTweets(id);
  }, [id]);

  return (
    <div>
      <h2>Artist Details</h2>
      <Albums />
      <Tweets />
    </div>
  );
};

export default ArtistDetail;
