export default function runNavigation({ activeTab, setActiveTab }) {
  return (
    <nav>
      <ul>
        <li><button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>À propos</button></li>
        <li><button className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projets</button></li>
        <li><button className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>Galerie</button></li>
        <li><button className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}
