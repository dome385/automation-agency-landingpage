import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
/* import PricingList from "./PricingList"; */
import { LeftLine, RightLine } from "./design/Pricing";

const Datenschutz = () => {
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

        <Heading tag="" title="Datenschutzerklärung" />

        <p className="p text-center mb-6">
          1. Allgemeines <br />
          Die Datenschutzerklärung informiert Sie als Nutzer dieser Website über
          die Art, den Umfang und Zwecke der Erhebung und Verwendung
          personenbezogener Daten durch die KI-Automatisierungen und
          Chatbot-Agentur (nachfolgend „wir“ oder „uns“). Der Schutz Ihrer
          persönlichen Daten ist uns ein wichtiges Anliegen. Ihre Daten werden
          im Einklang mit den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung behandelt.
        </p>
        <p className="mt-4 text-center">
          2. Verantwortlicher <br />
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:{" "}
          <br />
          Doflow - Dominik Niestroj Vorderheide 11 59558 Lippstadt <br />
          3. Erhebung und Verarbeitung personenbezogener Daten Personenbezogene
          Daten sind Informationen, die dazu genutzt werden können, Ihre
          Identität zu erfahren, wie z.B. Ihr Name, Ihre E-Mail-Adresse oder
          Ihre Telefonnummer. Wir erheben und nutzen Ihre personenbezogenen
          Daten ausschließlich im Rahmen der Bestimmungen des Datenschutzrechts
          der Bundesrepublik Deutschland.
          <br /> 3.1 Besuch der Website
          <br /> Bei jedem Zugriff auf unsere Website und bei jedem Abruf einer
          Datei werden Zugriffsdaten über diesen Vorgang in einer Protokolldatei
          auf unserem Server gespeichert. Zu den gespeicherten Daten gehören:
          Ihre IP-Adresse Datum und Uhrzeit des Zugriffs Name der abgerufenen
          Datei Übertragene Datenmenge Meldung über erfolgreichen Abruf
          Webbrowser und anfragende Domain Diese Daten werden ausschließlich zur
          technischen Analyse und zur Sicherstellung des Betriebs der Website
          verwendet und anschließend gelöscht. <br /> 3.2 Nutzung von Chatbots
          und KI-Automatisierungen
          <br /> Wenn Sie unsere Chatbots oder KI-Automatisierungen nutzen,
          können zusätzliche Daten erhoben werden, wie z.B.: Eingegebene Texte
          oder Befehle Nutzungsmuster und Interaktionen mit dem Chatbot
          Technische Daten wie Gerätetyp und Betriebssystem Diese Daten werden
          zur Verbesserung unserer Dienste und zur personalisierten
          Kommunikation verwendet.
          <br /> 4. Einsatz von Google als Drittanbieter
          <br /> Unsere Website nutzt verschiedene Dienste von Google LLC
          („Google“), wie Google Analytics, Google AdSense und Google reCAPTCHA.
          Diese Dienste sammeln Daten über Ihre Nutzung unserer Website, die von
          Google verarbeitet und gespeichert werden. Die Nutzung dieser
          Google-Dienste ermöglicht es uns, unsere Website zu analysieren, vor
          Missbrauch zu schützen und unsere Werbemaßnahmen zu optimieren.
          <br /> 4.1 Google Analytics
          <br /> Google Analytics verwendet so genannte „Cookies“, Textdateien,
          die auf Ihrem Computer gespeichert werden und die eine Analyse der
          Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
          erzeugten Informationen über Ihre Benutzung dieser Website werden in
          der Regel an einen Server von Google in den USA übertragen und dort
          gespeichert.
          <br /> 5. Weitergabe von Daten
          <br /> Ihre personenbezogenen Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben, es sei denn, wir sind
          gesetzlich dazu verpflichtet.
          <br /> 6. Ihre Rechte
          <br /> Sie haben das Recht, Auskunft über die bei uns gespeicherten
          personenbezogenen Daten zu erhalten. Zusätzlich haben Sie das Recht
          auf Berichtigung unrichtiger Daten, Sperrung und Löschung Ihrer
          personenbezogenen Daten, soweit dem keine gesetzliche
          Aufbewahrungspflicht entgegensteht.
          <br /> 7. Änderungen dieser Datenschutzerklärung <br />
          Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an
          geänderte Rechtslagen oder Änderungen des Dienstes sowie der
          Datenverarbeitung anzupassen. Die aktuelle Version finden Sie stets
          auf dieser Seite.
          <br /> 8. Kontakt Bei Fragen zum Datenschutz <br />
          wenden Sie sich bitte an die oben genannte Adresse oder per E-Mail an
          uns. <br /> Stand: 01.04.2024
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

export default Datenschutz;
