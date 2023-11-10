import Header from "../components/Header";
import Hero from "../assets/images/heroimg.png";

function Home() {
  return (
    <>
      <Header />
      <div className="flex row items-center">
        <div className="p-24">
          <h2 className="font-extrabold text-5xl">Our Mission</h2>
          <p className="mt-8">
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
      <div className="items-center bg-[#EEC643]">
        <div className="p-24 text-center ">
          <h2 className="font-extrabold text-5xl">Meet Our Team</h2>
          <p className="mt-8">
            content content content content content content content content
            content
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
