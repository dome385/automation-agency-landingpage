import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 text-right">
          <a href="/impressum">Impressum</a>
        </p>
        <p className="caption text-n-4 text-right">
          <a href="/datenschutz">Datenschutzerklärung</a>
        </p>
        {/* <p className="caption text-n-4 text-right">
          <a target="_blank" href="https://www.dotion.de">
            Blog
          </a>
        </p> */}
        {/* <p className="caption text-n-4 text-center">
          <a target="_blank" href="/airbnb-chat">
            Airbnb-KI-Chatlösung
          </a>
        </p> */}
        <p className="caption text-n-4 lg:block text-left">
          © {new Date().getFullYear()}. All rights reserved DoFlow.
        </p>

        <ul className="flex gap-5 flex-wrap mt-10">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
