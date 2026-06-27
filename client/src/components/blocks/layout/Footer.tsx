import Link from "next/link";
import { FooterProps } from "../../../../types";
import { StrapiImage } from "../StrapiImage";

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  const { logo, navigation, policies, copy } = data;
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <StrapiImage
          src={logo.image.url}
          alt={logo.image.alternativeText || "No alternative text"}
          width={120}
          height={120}
          className="footer__logo--white"
        />
        <ul className="footer__links">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link href={item.href} target={item.isExternal ? "_blank" : "_self"}>
                <h5>{item.text}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((item) => (
            <li key={item.id}>
              <Link href={item.href} target={item.isExternal ? "_blank" : "_self"} className="copy">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">
          &copy; {new Date().getFullYear()} {copy}
        </p>
      </div>
    </footer>
  );
}
