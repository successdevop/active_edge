// src/context/ArtistContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch artists on mount
    const fetchArtists = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      setArtists(response.data);
    };
    fetchArtists();
  }, []);

  // Fetch albums for a specific artist
  const fetchAlbums = async (artistId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${artistId}`
    );
    setAlbums(response.data);
  };

  // Fetch tweets for a specific artist
  const fetchTweets = async (artistId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${artistId}`
    );
    setTweets(response.data);
  };

  return (
    <ArtistContext.Provider
      value={{ artists, albums, tweets, fetchAlbums, fetchTweets }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
