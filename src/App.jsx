import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Gallery from './components/Sections/Gallery';
import Contact from './components/Sections/Contact';
import ProjectFocusView from './components/ProjectFocusView';
import data from './data';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  // Focus View Mode
  if (selectedProject) {
    window.scrollTo(0, 0);
    return (
      <ProjectFocusView
        project={selectedProject}
        onReturn={() => setSelectedProject(null)}
      />
    );
  }

  // Main UI
  return (
    <div className="container">
      <Header data={data.about} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main id="main_content">
        {activeTab === 'about' && <About data={data.about} skills={data.skills} tools={data.tools} />}
        {activeTab === 'projects' && <Projects projects={data.projects} onSelectProject={setSelectedProject} />}
        {activeTab === 'gallery' && <Gallery gallery={data.gallery} />}
        {activeTab === 'contact' && <Contact contact={data.contact} />}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} {data.about.name}. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
