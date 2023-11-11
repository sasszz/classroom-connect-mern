import Header from "../components/Header";
import Hero from "../assets/images/home-heroimg.png";
import FooterLanding from "../components/FooterLanding";

function Home() {
  return (
    <>
      <Header />
      <div className="flex row items-center text-white bg-gradient-to-b from-[#011638] from-90% via-[#011638] via-30% to-[#326298] to-10%">
        <div className="p-24">
          <h2 className="font-extrabold text-5xl">
            All-in-one classroom in a virtual space
          </h2>
          <p className="mt-8">
            ClassConnect is your virtual classroom to engage with classmates and
            teachers to build meaningful friendships.
          </p>
        </div>
        <img src={Hero} alt="Hero Image" />
      </div>
      <div className="items-center bg-[#EEC643]">
        <div className="p-24 text-center ">
          <h2 className="font-extrabold text-2xl">
            Engagement that you are missing in your virtual class
          </h2>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}

export default Home;
