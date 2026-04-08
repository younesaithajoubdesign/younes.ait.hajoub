export default function Header({ data }) {
  return (
    <header id="header">
      <div className="avatar">
        <img src={data.profil_img} alt={data.name} />
      </div>
      <div className="intro">
        <div className="wrapper">
          <h2>{data.name}</h2>
          <p>{data.role}</p>
        </div>
        <div className="cta">
          <a href="#download-cv" className="btn">Télécharger le CV</a>
        </div>
      </div>
    </header>
  );
}
