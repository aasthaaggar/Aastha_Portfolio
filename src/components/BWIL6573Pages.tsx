import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE, RevealText } from './fx';
import Achievements from './Achievements';

type Feature = {
  kicker?: string;
  title: string;
  body: string;
  footer?: string;
  pdfLink?: string;
  pdfLabel?: string;
  image?: string;
  imageAlt?: string;
};

function Heading({ episode, title, subtitle }: { episode: string; title: string; subtitle: string }) {
  return (
    <div className="gutter mb-10 max-w-5xl">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-crimson-2">{episode}</p>
      <RevealText as="h2" text={title} className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.87] text-bone" />
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-lg">{subtitle}</p>
    </div>
  );
}

function FilmCards({ entries }: { entries: Feature[] }) {
  return (
    <div className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-9">
      {entries.map((entry, index) => (
        <motion.article key={entry.title} className="group relative min-h-[320px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-ink-2 sm:w-[44vw] lg:w-[29vw]"
          initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-5% 0px' }} transition={{ duration: .7, delay: index * .08, ease: EASE }}>
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(229,19,43,0.23),transparent_65%)] transition duration-700 group-hover:scale-110" />
          <div className="relative flex h-full flex-col p-7 sm:p-9">
            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.25em] text-crimson-2">{entry.kicker}</p>
            <h3 className="font-display text-4xl leading-[0.95] tracking-wide text-bone sm:text-5xl">{entry.title}</h3>
            
            {entry.image && (
              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                <img
                  src={entry.image}
                  alt={entry.imageAlt || entry.title}
                  loading="lazy"
                  className="h-[190px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}

            <p className="mt-5 text-sm leading-relaxed text-mist">{entry.body}</p>
            
            {entry.footer && (
              <p className="mt-6 border-t border-white/10 pt-6 text-xs leading-relaxed text-smoke">
                {entry.footer}
              </p>
            )}

            {entry.pdfLink && (
              <a
                href={entry.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-crimson/50 bg-crimson/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-bone transition-all duration-300 hover:border-crimson hover:bg-crimson hover:text-white"
              >
                <span>↗</span>
                {entry.pdfLabel || 'View Supporting PDF'}
              </a>
            )}

          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function HomeIntro() {
  return <div className="gutter mb-10 max-w-4xl">
    <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-crimson-2">BWIL6573 · E-PORTFOLIO · EPISODE 01</p>
    <p className="text-base leading-relaxed text-mist">This portfolio presents my professional identity, employability capabilities, Digital Industry Project journey, critical reflection and supporting evidence.</p>
    <div className="mt-5 flex flex-wrap gap-3">
      <a className="rounded-full bg-crimson px-6 py-3 text-xs font-bold tracking-widest text-white hover:bg-crimson-2" href={profile.resumePdf} target="_blank" rel="noreferrer">VIEW CV ↗</a>
      <a className="rounded-full border border-white/25 px-6 py-3 text-xs font-bold tracking-widest text-bone hover:border-bone" href={profile.links.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
    </div>
    
  </div>;
}

export function GlobalSkillsPage() {
  return <>
    <Heading episode="EPISODE 02 · CAPABILITY DEVELOPMENT" title="GLOBAL SKILLS" subtitle='' />
    <FilmCards entries={[
      { kicker: 'SKILL 01 ·', title: 'Leader', body: 'Project and journey. Leadership is a practice, not a position: in the Digital Industry Project, I set a shared goal, delegated by strength, quality-checked drafts against the rubric and applied all client feedback to the final report, and I keep building this through AIESEC and as a Peer Mentor (Lead Mentor next semester).]', footer: 'Evidence. Peer Mentor Excellence Award, Semester 2, 2026 (Olivia Tunks, 21 September 2026). Christine Smith, client, 11 October 2026: “…sound, actionable pieces of advice from Aastha that I have started to implement and will continue to work on.” Our data-backed recommendations were practical enough for her to act on, the heart of being Service Oriented.' },
      { kicker: 'SKILL 02 ·', title: 'Service-Oriented', body: 'Project and Journey. Christine needed advice that genuinely helped, so we used data to show where her time and money were going and proposed cost cuts and a capped offer. I built rapport through meetings, emails, a report and a presentation.', footer: 'Evidence. Christine Smith (client, 11 October 2026) called my advice “sound, actionable”; teammates Clarice Wang, Peter, Lei, Tian Li, Morgan Zhou (29 September 2026) rated my service orientation 5/5. As a Lions Club member, I build networks through trust. Parasuraman et al. (1988) link service quality to empathy; Tomlinson (2017) links networks to employability. Honest, practical advice earned by building Christine’s trust.' },
      { kicker: 'SKILL 03 ·', title: 'Innovative', body: 'Project and Journey. I wanted our report to meet the professional standard shown in class, so I designed Photoshop templates for the team. They preferred our existing format, so I stayed flexible and applied the same principles (clear headings, tables and plain language) to the client version’s title page, contents, problem statement, SWOT, brand position and target audience. I also tested ideas through case competitions and conferences, such as (PRME Competition), where I learnt to present a case study as a short presentation, keeping it succinct and bringing in my Accounting and Finance specialisation.', footer: 'Evidence. Christine Smith [Client,28 September, 2026] wrote: “I am impressed with the detail of this draft report.” It also made her reconsider how to earn income without extra hours, so the work prompted real change. Grant and Grant (2012) argue innovation needs a deliberate supporting culture, not just individual ideas. Using Kolb’s (2015) cycle, I realised a one-page sample tied to the rubric would have brought the team together rather than finished templates. Next time, I will involve people early so the idea becomes implementable.' },
    ]} />
  </>;
}

export function IndustryProjectPage() {
  return <>
    <Heading episode="EPISODE 03 · EXPERIENTIAL LEARNING" title="INDUSTRY PROJECT" subtitle='' />
    
    <FilmCards entries={[
      {
        title: 'Project Context',
        body: 'As a consultant for The Food Granny, a South Australian media business, I worked with my team through the University of Sydney Digital Industry Project to explore business growth opportunities. Our work focused on sponsorship models, council grant eligibility, market rates and developing practical recommendations to support the client’s business.'
      },
      {
        title: 'My Contribution',
        body: 'I researched sponsorship opportunities, evaluated council grant criteria and verified information sources to ensure our recommendations were reliable. I also took responsibility for delegating tasks according to team members’ strengths, monitoring deadlines and reviewing deliverables. I helped communicate complex findings in clear, accessible language suitable for the client.'
      },
      {
        title: 'What Changed',
        body: 'Our recommendations provided the client with actionable ideas for business development. In feedback dated 11 October 2026, the client described our work as “sound, actionable pieces of advice” and confirmed she had begun implementing them. The experience demonstrated my strengths in stakeholder communication, evidence-based research, teamwork and project coordination.'
      }
    ]} />

    
  </>;
}


export function ReflectionPage() {
  return (
    <>
      <Heading
        episode="EPISODE 04 · ACHIEVEMENTS & RECOGNITION"
        title="ACHIEVEMENTS"
        subtitle="A collection of awards, recognition and certifications reflecting my leadership, commitment and professional development."
      />

      <Achievements />
    </>
  );
}


export function EvidencePage({ onResume }: { onResume: () => void }) {
  return (
    <>
      <Heading
        episode="EPISODE 05 · SUPPORTING ARTEFACTS"
        title="THE EVIDENCE"
        subtitle="Authentic feedback, project documentation and personal reflections demonstrating my professional development through the Digital Industry Project."
      />

      <FilmCards
        entries={[
          {
            kicker: 'ARTEFACT 01',
            title: 'Stakeholder Feedback',
            body: 'Our client, founder of The Food Granny, was “impressed with the detail of this draft report” and recognised the team’s commitment. She valued our practical recommendations and the questions our research raised. Our program coordinator described it as “a very good first draft”, recognising our sponsorship research and grant tracker while recommending improvements using SCQA, clearer priorities and the client’s own voice. I used this feedback to strengthen our final report.',
            pdfLink: '/assets/stakeholder-feedback.pdf',
            pdfLabel: 'View Feedback Evidence'
          },
          {
            kicker: 'ARTEFACT 02',
            title: 'Project Documentation',
            body: 'I researched opportunities to improve The Food Granny’s engagement, including identifying a paid website sign-up form that was not generating registrations. I presented these findings to the client through a slide deck and recommended ways to strengthen her ebook content to engage local businesses. Our wider report included sponsorship rate cards, grant eligibility information, important deadlines and a practical grant tracker.',
            // image: '/assets/artefact-2.jpeg',
            imageAlt: 'Digital Industry Project presentation and documentation',
            pdfLink: '/assets/artefact-2.pdf',
            pdfLabel: 'View Project Report'
          },
          {
            kicker: 'ARTEFACT 03',
            title: 'Learning Journey',
            body: 'As Team Leader, I learned that not everyone thinks the way I do. I invited ideas from everyone, shared my own view, and we decided by vote. My team preferred a simple report and to work on their parts independently, even though my strength is creative design. I supported that, but came to see that good leadership also means giving direction, so I began asking “what if we did this differently?” to challenge the team constructively. When the client’s feedback arrived, I treated it as a stepping stone and took personal responsibility for responding to it. I presented her with my in-depth research on how to position her ebook, showed how maintaining her website was leading to heavy costs, and gave her ideas for using her Substack wisely. The project taught me to listen, motivate others to contribute, and guide rather than direct. I also built a genuine connection with the client, and wanted to give her the best of my knowledge and skills, as I would for my own grandmother.',
            pdfLink: '/assets/artefact-3.pdf',
            pdfLabel: 'View Learning Evidence'
          }
        ]}
      />

      <div className="gutter mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onResume}
          className="rounded-full bg-crimson px-7 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-crimson-2"
        >
          ▶ VIEW ORIGINAL RESUME
        </button>

        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/25 px-7 py-3 text-xs font-bold tracking-widest text-bone transition hover:border-bone"
        >
          LINKEDIN ↗
        </a>
      </div>
    </>
  );
}

