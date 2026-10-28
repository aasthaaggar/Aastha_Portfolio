import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import './assessment-portfolio.css';

type Page = 'home' | 'skills' | 'project' | 'achievements' | 'evidence';
const pages: { id: Page; name: string }[] = [
  { id: 'home', name: 'Home' },
  { id: 'skills', name: 'Global Skills' },
  { id: 'project', name: 'Industry Projects' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'evidence', name: 'Evidence' },
];
const getPage = (): Page => {
  const id = window.location.hash.slice(2);
  return pages.some((p) => p.id === id) ? (id as Page) : 'home';
};
const placeholder = '[Add your own experience, evidence and reflection here.]';

export default function AssessmentPortfolio() {
  const [page, setPage] = useState<Page>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const change = () => {
      setPage(getPage());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);

  return (
    <div className="assessment-site">
      <header className="assessment-header">
        <a className="assessment-brand" href="#/home">{profile.displayName}<small>Employability Portfolio</small></a>
        <button className="assessment-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? 'assessment-nav is-open' : 'assessment-nav'} aria-label="Main navigation">
          {pages.map((p) => <a key={p.id} className={page === p.id ? 'active' : ''} href={`#/${p.id}`} aria-current={page === p.id ? 'page' : undefined}>{p.name}</a>)}
        </nav>
      </header>

      <main className="assessment-main" id="main-content">
        {page === 'home' && <>
          <section className="assessment-hero">
            <div>
              <span className="assessment-eyebrow">BWIL6573 · Professional E-Portfolio</span>
              <h1>Building my professional identity through experience.</h1>
              <p className="assessment-lead">{profile.intro}</p>
              <p className="assessment-placeholder">My career goals and unique professional strengths: {placeholder}</p>
              <div className="assessment-actions">
                <a className="assessment-primary" href={profile.resumePdf} target="_blank" rel="noreferrer">View my CV ↗</a>
                <a className="assessment-secondary" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <img className="assessment-portrait" src={profile.portrait.src} alt={profile.portrait.alt} />
          </section>
          <section className="assessment-card"><h2>My employability journey</h2><p>{placeholder}</p><a className="assessment-text-link" href="#/skills">Explore my global skills →</a></section>
        </>}
        {page === 'skills' && <>
          <PageHeading number="01" title="Global Skills" subtitle="How my capabilities developed through the Digital Industry Projects." />
          <div className="assessment-grid">
            {['Leader', 'Service-Oriented', 'Innovative', 'Adaptability'].map((skill, i) => (
              <article className="assessment-card" key={skill}>
                <span className="assessment-eyebrow">SKILL {String(i + 1).padStart(2, '0')}</span>
                <h2>{skill}</h2>
                <h3>Situation and contribution</h3><p>{placeholder}</p>
                <h3>Growth and learning</h3><p>{placeholder}</p>
                <h3>Evidence and literature</h3><p>[Insert real feedback/artefact and an in-text employability-literature citation.]</p>
              </article>
            ))}
          </div>
        </>}
        {page === 'project' && <>
          <PageHeading number="02" title="Digital Industry Project" subtitle="My role, contributions, challenges and outcomes." />
          <div className="assessment-stack">
            {['Project overview and objective', 'My role and responsibilities', 'Collaboration and challenges', 'Outcomes and evidence'].map((heading) => <section className="assessment-card" key={heading}><h2>{heading}</h2><p>{placeholder}</p></section>)}
          </div>
        </>}
        
        {page === 'evidence' && <>
          <PageHeading number="04" title="Evidence & Artefacts" subtitle="Documents supporting my professional development." />
          <div className="assessment-grid">
            <article className="assessment-card"><h2>Curriculum Vitae</h2><p>My professional background and qualifications.</p><a className="assessment-text-link" href={profile.resumePdf} target="_blank" rel="noreferrer">Open CV ↗</a></article>
            <article className="assessment-card"><h2>LinkedIn Profile</h2><p>My professional network and online identity.</p><a className="assessment-text-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">Open LinkedIn ↗</a></article>
            <article className="assessment-card"><h2>Project artefacts</h2><p>[Add your real Digital Industry Project screenshots, documents or outputs and their context.]</p></article>
            <article className="assessment-card"><h2>Feedback and achievements</h2><p>[Add appropriately permissioned feedback and other evidence from BWIL6573 or Job Smart Edge.]</p></article>
          </div>
        </>}
      </main>
      <footer className="assessment-footer"><span>{profile.displayName} · BWIL6573 E-Portfolio</span><span>Professional development · Digital Industry Project</span></footer>
    </div>
  );
}

function PageHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <section className="assessment-page-heading"><span className="assessment-eyebrow">CHAPTER {number}</span><h1>{title}</h1><p>{subtitle}</p></section>;
}
