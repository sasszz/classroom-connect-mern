import Header from "../components/Header";
import Hero from "../assets/images/heroimg.png";

function Home() {
  return (
    <>
      <Header />
      <div className="flex row">
        <div className="p-24">
          <h2 className="font-bold text-3xl">Our Mission</h2>
          <p>
            COVID-19 has impacted the way way we learn today. However, online
            learning can’t bring in the environment of in person class.
          </p>
          <p className="mt-4">
            ClassConnect aims to build connections between teachers and
            students, increase engagement in the class, and collaboration for
            meaningful bonds
          </p>
        </div>
        <img src={Hero} alt="Hero Image" />
      </div>
    </>
  );
}

export default Home;
