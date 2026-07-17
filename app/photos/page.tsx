import { Footer, Header } from "../components/SiteChrome";
const galleryIds = ["7566","7677","7704","7711","7973","8012","8031","8042","8088","8163","8164","8199","8217","8222","8226","8292","8294","8300","8312","8328","8343","8350","8373","8469","8479","8497","8507","8616"];

export default function PhotosPage() {
  return <><Header overlay /><main><section className="hero subpage-hero"><img className="hero-image" src="/images/photos-header.jpg" alt="Torii Sushi - Photos Restaurant Japonais Laval" /><div className="hero-shade" /><div className="subpage-title"><h2>Photos</h2><h3>Torii Sushi</h3></div></section>
    <section className="gallery-section"><div className="gallery-intro"><p>Pour nos plats et nouvelles les plus récentes</p><a className="instagram-button" href="https://www.instagram.com/toriisushilaval/">Voir @toriisushilaval sur Instagram</a></div><div className="gallery-grid">{galleryIds.map((id) => <a href={`/images/photos/galerie-${id}.jpg`} key={id} target="_blank" rel="noreferrer"><img src={`/images/photos/galerie-${id}.jpg`} alt={id} loading="lazy" /></a>)}</div></section>
  </main><Footer /></>;
}
