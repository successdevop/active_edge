// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtistProvider } from "./context/ArtistContext";
import Home from "./pages/Home";
import ArtistDetail from "./pages/ArtistDetail";

function App() {
  return (
    <ArtistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />
        </Routes>
      </Router>
    </ArtistProvider>
  );
}

export default App;
