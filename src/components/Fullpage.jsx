import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
//import Pricing from "./components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import { CookieModal } from "@schlomoh/react-cookieconsent";

const cookieContent = () => (
  <>
    <h3>Test Test</h3>
    <p>Bla Bla Bla</p>
  </>
);

const Fullpage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <CookieModal />
        <Header />
        <Hero />
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
