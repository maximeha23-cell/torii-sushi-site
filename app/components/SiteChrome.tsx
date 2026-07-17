import Link from "next/link";

const menus = {
  fr: [
    ["Menu Midi", "https://toriisushi.com/menu/midi-fr.pdf"],
    ["Sushis en salle", "https://toriisushi.com/menu/list-fr-nov-25.pdf"],
    ["Table d’hôte", "https://toriisushi.com/menu/soir-fr.pdf"],
    ["Sushis pour emporter", "https://toriisushi.com/menu/takeout-fr-nov-25.pdf"],
  ],
  en: [
    ["Lunch", "https://toriisushi.com/menu/midi-fr.pdf"],
    ["Dine-in sushi", "https://toriisushi.com/menu/list-en-nov-25.pdf"],
    ["Table d’hôte", "https://toriisushi.com/menu/soir-en-nov-25.pdf"],
    ["Takeout sushi", "https://toriisushi.com/menu/list-en-nov-25.pdf"],
  ],
};

const socialLinks = [
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/toriisushilaval/" },
  { label: "Facebook", icon: "facebook-f", href: "https://www.facebook.com/Toriisushilaval/" },
  { label: "Tripadvisor", icon: "tripadvisor", href: "https://fr.tripadvisor.ca/Restaurant_Review-g155029-d805890-Reviews-Torii_Sushi-Laval_Quebec.html" },
];

function SocialIcons({ className }: { className: string }) {
  return <div className={className}>{socialLinks.map(({ label, icon, href }) => (
    <a aria-label={label} href={href} key={label} target="_blank" rel="noreferrer">
      <i aria-hidden="true" className={`fa-brands fa-${icon}`} />
    </a>
  ))}</div>;
}

export function Header({ overlay = false, locale = "fr" }: { overlay?: boolean; locale?: "fr" | "en" }) {
  const english = locale === "en";
  const links = menus[locale];
  return <header className={overlay ? "site-header overlay-header" : "site-header page-header"}>
    <div className="address-bar">2131, boulevard Le Carrefour (Laval) H7S 2J7</div>
    <nav className="desktop-nav" aria-label="Global">
      <Link className="logo-link" href={english ? "/en" : "/"}><img src="/images/torii-sushi-logo.png" alt="Torii Sushi Laval" /></Link>
      <div className="nav-links"><details className="menu-dropdown"><summary>Menus</summary><div className="dropdown-panel">{links.map(([label, href]) => <a key={href + label} href={href}>{label}</a>)}</div></details>
        <Link href={english ? "/en/about-us" : "/a-propos"}>{english ? "About us" : "À propos"}</Link><Link href={english ? "/en/photos" : "/photos"}>Photos</Link><a href="https://resy.com/cities/lvlq/restaurant-torii-sushi?date=2023-11-15&seats=2">{english ? "Reservations" : "Réservations"}</a><Link href={english ? "/" : "/en"}>{english ? "Français" : "English"}</Link>
      </div>
      <div className="header-actions"><a className="phone-link" href="tel:14509788848">(450) 978-8848</a><SocialIcons className="header-socials" /></div>
    </nav>
    <nav className="mobile-nav" aria-label="Navigation mobile"><Link className="logo-link" href={english ? "/en" : "/"}><img src="/images/torii-sushi-logo.png" alt="Torii Sushi Laval" /></Link><details className="mobile-menu"><summary aria-label="Ouvrir le menu"><span /><span /><span /></summary><div className="mobile-panel"><p>Menus</p>{links.map(([label, href]) => <a key={href + label} href={href}>{label}</a>)}<Link href={english ? "/en/about-us" : "/a-propos"}>{english ? "About us" : "À propos"}</Link><Link href={english ? "/en/photos" : "/photos"}>Photos</Link><a href="https://resy.com/cities/lvlq/restaurant-torii-sushi?date=2023-11-15&seats=2">{english ? "Reservations" : "Réservations"}</a><Link href={english ? "/" : "/en"}>{english ? "Français" : "English"}</Link><a href="tel:14509788848">(450) 978-8848</a><div className="mobile-socials">{socialLinks.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}</div></div></details></nav>
  </header>;
}

export function SocialStrip({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const en = locale === "en";
  return <section className="social-strip"><p>{en ? "Follow Torii Sushi" : "Suivez Torii Sushi"}</p><div><a href="https://www.instagram.com/toriisushilaval/"><strong>Instagram</strong><span>@toriisushilaval</span></a><a href="https://www.facebook.com/Toriisushilaval/"><strong>Facebook</strong><span>Torii Sushi Laval</span></a><a href="https://fr.tripadvisor.ca/Restaurant_Review-g155029-d805890-Reviews-Torii_Sushi-Laval_Quebec.html"><strong>Tripadvisor</strong><span>{en ? "Read reviews" : "Voir les avis"}</span></a></div></section>;
}

export function Footer({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const en = locale === "en"; const links = menus[locale];
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><img src="/images/torii-sushi-logo.png" alt="Torii Sushi Footer Logo" /><SocialIcons className="socials" /></div><div><h5>MENUS</h5>{links.map(([label, href]) => <a className="footer-link" key={href + label} href={href}>{label}</a>)}</div><div><h5>{en ? "CONTACT INFORMATION" : "COORDONNÉES"}</h5><a className="footer-link" href="https://goo.gl/maps/mT7Ztv4N1bGXm2fW6">2131, boulevard Le Carrefour<br />(Laval) H7S 2J7</a><a className="footer-link" href="tel:+14509788848">450 978-8848</a><a className="footer-link" href="mailto:info@toriisushi.com">info@toriisushi.com</a></div></div></footer>;
}
