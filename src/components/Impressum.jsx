import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
/* import PricingList from "./PricingList"; */
import { LeftLine, RightLine } from "./design/Pricing";

const Impressum = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="" title="Impressum" />
        <p className="text-center mb-6">Angaben gemäß § 5 TMG</p>
        <p className="p text-center mb-6">
          Dominik Niestroj <br />
          Vorderheide 11 <br />
          <p className="mb-8">59558 Lippstadt</p>
          Vertreten durch: <br />
          Dominik Niestroj und Eduard Bauer
          <br />
          Kontakt: <br />
          Telefon: 0176-6886934 <br /> E-Mail: dominik.niestroj@gmail.com <br />
        </p>
        <p className="mt-4 text-center">
          Haftungsausschluss: <br />
          Urheberrecht <br /> Die durch die Seitenbetreiber erstellten Inhalte
          und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
          nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
          umgehend entfernen. <br />
          Datenschutz <br /> Die Nutzung unserer Webseite ist in der Regel ohne
          Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor. <br /> Google Analytics <br /> Diese
          Website benutzt Google Analytics, einen Webanalysedienst der Google
          Inc. Google. Google Analytics verwendet sog. Cookies, Textdateien, die
          auf Ihrem Computer gespeichert werden und die eine Analyse der
          Benutzung der Website durch Sie ermöglicht. Die durch den Cookie
          erzeugten Informationen über Ihre Benutzung dieser Website
          (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in
          den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
          Reports über die Websiteaktivitäten für die Websitebetreiber
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
          Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
          dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
          Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
          IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
          können die Installation der Cookies durch eine entsprechende
          Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website voll umfänglich nutzen können. Durch die
          Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
          Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
          Weise und zu dem zuvor benannten Zweck einverstanden.
        </p>

        <div className="relative">
          {/*  <PricingList /> */}
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          {/*     <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a> */}
        </div>
      </div>
    </Section>
  );
};

export default Impressum;
