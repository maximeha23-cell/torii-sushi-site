import { Footer, Header, SocialStrip } from "./components/SiteChrome";

export default function Home() {
  return (
    <><Header overlay /><main>
      <section className="hero home-hero"><img className="hero-image" src="/images/home-main.jpg" alt="Torii Sushi - Restaurant Japonais Laval" /><div className="hero-shade" /><div className="hero-copy">
        <p className="script accent">L’ultime</p><h1>EXPÉRIENCE JAPONAISE À LAVAL</h1><p className="script wine">Apportez votre vin!</p>
        <a className="primary-button" href="https://resy.com/cities/lvlq/restaurant-torii-sushi?date=2023-11-15&seats=2">Réservations</a>
      </div></section>
      <section className="portal-intro"><p className="portal-title">LE RESTAURANT TORII SUSHI EST UN PORTAIL JAPONAIS À L’ENTRÉE DES SANCTUAIRES,<br /> MARQUANT L’ACCÈS AU MONDE SACRÉ.</p><p className="portal-subtitle">FRANCHIR LE SEUIL DE NOTRE RESTAURANT DE SUSHIS, C’EST SE LAISSER IMPRÉGNER D’UNE EXPRESSION SENSORIELLE PRESQUE DIVINE !</p><p className="script owner">– Phat Nguyen, Propriétaire</p></section>
      <section className="split-section story-section"><div className="split-image-wrap"><img src="/images/home-our-story.jpg" alt="Our Story" /></div><div className="split-copy"><p className="script accent eyebrow">Découvrez</p><h2>Notre histoire</h2><p className="caps">INSPIRÉE DE LA RICHE CULTURE ET DES TRADITIONS JAPONAISES</p><p>Le restaurant Torii Sushi vous invite à découvrir un menu japonais unique en son genre. Chaque bouchée, que ce soit Sushi, Sashimi ou Maki, saura stimuler vos sens et vous tentera de faire un voyage…au Japon.</p></div></section>
      <section className="creations"><div className="section-heading dark-heading"><h2>Créations</h2><h3>Torii Sushi</h3></div><div className="creation-grid fresh-grid">{["8292","8343","8479","8616"].map((id) => <a className="creation-card" href="https://www.instagram.com/toriisushilaval/" key={id}><img src={`/images/photos/galerie-${id}.jpg`} alt="Création Torii Sushi" /><div className="creation-overlay"><h4>VOIR NOS CRÉATIONS RÉCENTES</h4><p>Découvrez nos plats et nouveautés sur Instagram.</p></div></a>)}</div></section>
      <SocialStrip />
      <section className="split-section restaurant-section"><div className="split-copy"><p className="script accent eyebrow">Notre</p><h2>Restaurant</h2><p className="caps">LE RESTAURANT TORII SUSHI, SITUÉ AU COEUR DE LAVAL DEPUIS PLUS DE 15 ANS, EST UN INCONTOURNABLE DE LA FINE CUISINE JAPONAISE.</p><p>En plus d’une grande variété de Maki, Sashimi et Sushi, nos chefs préparent une variété de plats japonais — de créations maison aux grillades et aux plats teriyaki. Que ce soit pour un dîner d’affaires, un souper en famille ou une réunion entre amis, vous trouverez exactement ce que vous cherchez.</p></div><div className="split-image-wrap"><img src="/images/our-restaurant.jpg" alt="Our restaurant" /></div></section>
      <section className="parallax-cta"><div><p className="script">Une expérience</p><h2>À SAVOURER</h2><a className="primary-button" href="https://resy.com/cities/lvlq/restaurant-torii-sushi?date=2023-11-15&seats=2">Réservations</a></div></section>
    </main><Footer /></>
  );
}
