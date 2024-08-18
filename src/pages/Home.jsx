// src/pages/Home.jsx
import ArtistList from "../components/ArtistList";

const Home = () => {
  return (
    <div className={`h-dvh text-center px-8 pt-20 bg-[#000]`}>
      <h1 className="mb-12 text-4xl lg:text-5xl lg:font-bold text-center leading-[3.5rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Chocolate City Artists App
      </h1>
      <ArtistList />
    </div>
  );
};

export default Home;
