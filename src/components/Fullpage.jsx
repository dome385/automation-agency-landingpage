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

const Content = () => (
  <>
    <h3>Wir verwenden Cookies.</h3>
    <p>
      Wir verwenden verschiedene Cookies, um Ihre Website-Erfahrung zu
      verbessern und Ihre Interaktionen mit unserer Website zu verfolgen. Hier
      sind einige Beispiele für Cookies, die wir verwenden: {<br />} Technische
      Cookies: Diese Cookies sind notwendig, um Ihnen die Website zu ermöglichen
      und sie zu verwenden. {<br />} Sie speichern Informationen wie Ihre
      Sprache und Ihre Einstellungen. {<br />} Funktionscookies: Diese Cookies
      helfen uns, Ihre Website-Erfahrung zu verbessern, indem sie Informationen
      über Ihre Interaktionen mit unserer Website speichern. Sie können
      beispielsweise helfen, Ihre Einstellungen zu speichern oder Ihre
      Recherchen zu speichern.{<br />} Marketingcookies: Diese Cookies helfen
      uns, Ihre Interaktionen mit unserer Website zu verfolgen, um Ihnen
      persönlich angepasste Inhalte und Werbung anzuzeigen. Sie speichern
      Informationen über Ihre Interaktionen mit unserer Website und Ihre
      Vorlieben.
    </p>
  </>
);

const Fullpage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <CookieModal
          infoContent={<Content />}
          acceptButtonText="Akzeptieren"
          declineButtonText="Ablehnen"
        />
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
