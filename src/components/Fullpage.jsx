import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
//import Pricing from "./components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import CookieConsent from "react-cookie-consent";

const Fullpage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <CookieConsent
          enableDeclineButton
          declineButtonText="Ablehnen"
          style={{ background: "#AC6AFF" }}
          buttonStyle={{ color: "#000000" }}
          buttonText="Akzeptieren"
        >
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
          Website zu bieten. Einige dieser Cookies sind für das reibungslose
          Funktionieren der Website unerlässlich, während andere dazu dienen,
          Ihre Nutzungserfahrung zu verbessern, personalisierte Inhalte
          anzuzeigen und Analysen durchzuführen.
        </CookieConsent>
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
