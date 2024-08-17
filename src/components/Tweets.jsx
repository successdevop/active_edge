// src/components/Tweets.jsx
import { useContext, useState } from "react";
import { ArtistContext } from "../context/ArtistContext";
import TweetForm from "./TweetForm";
import axios from "axios";

const Tweets = () => {
  const { tweets, fetchTweets } = useContext(ArtistContext);
  const [editTweetId, setEditTweetId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (tweet) => {
    setEditTweetId(tweet.id);
    setEditText(tweet.body);
  };

  const handleUpdate = async () => {
    if (editText.length >= 5) {
      await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${editTweetId}`,
        {
          body: editText,
        }
      );
      setEditTweetId(null);
      fetchTweets(); // Refresh tweets after update
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    fetchTweets(); // Refresh tweets after delete
  };

  return (
    <div>
      <h3>Tweets</h3>
      <TweetForm />
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            {editTweetId === tweet.id ? (
              <div>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Update your tweet"
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditTweetId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{tweet.body}</p>
                <button onClick={() => handleEdit(tweet)}>Edit</button>
                <button onClick={() => handleDelete(tweet.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweets;
