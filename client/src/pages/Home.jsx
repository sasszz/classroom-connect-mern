import { Link } from "react-router-dom"; // Make sure to import Link if using React Router
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="mt-10">
        <h2 className="font-bold text-5xl">Welcome to Class Connect</h2>
        <div className="m-4 font-bold text-3xl text-white italic">
          Where Meeting Meets Fun!
        </div>

        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
