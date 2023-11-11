import Header from "../components/Header";
import Hero from "../assets/images/heroimg.png";
import DeveloperGrid from "../components/Developer";
import FooterLanding from "../components/FooterLanding";

function AboutUs() {
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
            Get to know the wonderful individuals who made this product
            possible.
          </p>
        </div>
      </div>
      <DeveloperGrid />
      <FooterLanding />
    </>
  );
}

export default AboutUs;
