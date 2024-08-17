// src/components/TweetForm.jsx
import { useState } from "react";
import axios from "axios";

const TweetForm = () => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");

  const handleTweetChange = (e) => {
    const value = e.target.value;
    setTweet(value);
    if (value.length < 5) {
      setError("Tweet must be at least 5 characters long.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error) {
      // Post tweet
      await axios.post("https://jsonplaceholder.typicode.com/comments", {
        body: tweet,
      });
      setTweet(""); // Reset input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={tweet}
        onChange={handleTweetChange}
        placeholder="What's happening?"
      />
      {error && <p>{error}</p>}
      <button type="submit" disabled={!!error}>
        Tweet
      </button>
    </form>
  );
};

export default TweetForm;
