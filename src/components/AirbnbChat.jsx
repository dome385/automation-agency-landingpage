import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import HeaderAir from "./HeaderAir";
import HeroAir from "./HeroAir";
//import Pricing from "./components/Pricing";
import Roadmap from "./Roadmap";
import Services from "./Services";

const Fullpage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flat-chat">
        <HeaderAir />
        <HeroAir />
        <Benefits />
        <Collaboration />
        <Services />
        {/*<Pricing />*/}
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Fullpage;
