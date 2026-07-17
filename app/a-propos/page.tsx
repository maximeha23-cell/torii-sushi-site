import { Footer, Header } from "../components/SiteChrome";

const values = [
  { image: "/images/about-us-1.jpg", alt: "The Company", script: "Notre", title: "Entreprise", text: "Chez Torii Sushi, révéler les saveurs de chaque aliment fait partie de la tradition. C’est d’ailleurs la mission que s’est donné Chinh Vu Huy, chef cuisinier associé du restaurant. Ensemble, l’équipe de Torii s’applique à créer de nouveaux plats et mixer différentes saveurs donnant suite à une expérience culinaire gourmande et sensuelle unique où arômes et goûts diversifiés sont toujours au rendez-vous." },
  { image: "/images/about-us-2.jpg", alt: "The Experience", script: "", title: "Expérience", text: "Au restaurant Torii Sushi, nous faisons en sorte que votre passage soit une évocation gustative des plaisirs japonais, un moment de bonheur et un temps de partage enrichissant entre vous et vos proches!" },
  { image: "/images/about-us-3.jpg", alt: "The Philosophy", script: "", title: "Philosophie", text: "Pour Phat Nguyen, propriétaire du restaurant Torii Sushi, s’impliquer auprès de son équipe, de ses clients et de la communauté est important. C’est d’ailleurs la raison pour laquelle Torii Sushi est une entreprise socialement responsable : équité salariale, flexibilité des horaires, sorties sociales, implication dans des causes sociales, programme de récupération des déchets, etc." },
];
const team = [
  ["/images/team-phat.jpg", "Phat Nguyen", "Propriétaire", "Aime partager et rire, car le plaisir est autant dans l’assiette que chez les gens qui l’entourent!"],
  ["/images/team-chinh.jpg", "Chinh Vu Huy", "CHEF CUISINIER", "Curieux, perfectionniste, calme et posé. Jour après jour, plat après plat, Chef Vu repousse sans cesse les limites de ses créations!"],
  ["/images/team-michael.jpg", "Michael Ly", "Gérant", "Jeune, dynamique et plein d’énergie. La relève de demain est assurée!"],
];

export default function AboutPage() {
  return <><Header overlay /><main>
    <section className="hero subpage-hero"><img className="hero-image" src="/images/about-us-header.jpg" alt="Torii Sushi - Restaurant Japonais Laval" /><div className="hero-shade" /><div className="subpage-title"><h2>À propos</h2><h3>Torii Sushi</h3></div></section>
    <section className="about-values">{values.map((value, index) => <article className={`value-row ${index % 2 ? "reverse" : ""}`} key={value.title}><img src={value.image} alt={value.alt} /><div>{value.script && <p className="script accent eyebrow">{value.script}</p>}<h2>{value.title}</h2><p>{value.text}</p></div></article>)}</section>
    <section className="about-parallax"><div><p className="script">L’art de recevoir</p><h2>À LA JAPONAISE</h2></div></section>
    <section className="team-section"><div className="section-heading"><h2>Notre</h2><h3>Équipe</h3></div><div className="team-grid">{team.map(([image, name, role, text]) => <article key={name}><img src={image} alt={name} /><h4>{name}</h4><p className="accent role">{role}</p><p>{text}</p></article>)}</div></section>
  </main><Footer /></>;
}
