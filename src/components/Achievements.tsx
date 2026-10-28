import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      
      <div className="gutter mx-auto grid w-full max-w-[1250px] grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">

        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">

                <div aria-hidden className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />

                {a.image ? (
                  <a
                    href={a.link || a.image}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block h-[220px] shrink-0 overflow-hidden bg-[#17130e] p-3"
                    aria-label={`View ${a.title} certificate`}
                  >
                    <img
                      src={a.image}
                      alt={`${a.title} certificate`}
                      loading="lazy"
                      className="h-full w-full rounded-md object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <div className="relative flex h-[180px] shrink-0 items-center justify-center">
                    <div className="flex items-center gap-1">
                      <Laurel side="l" />
                      <p className="px-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b46a]">
                        {a.laurel}
                      </p>
                      <Laurel side="r" />
                    </div>
                  </div>
                )}

                <div className="relative flex flex-1 flex-col items-center px-5 pb-6 pt-5">

                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9b46a]">
                    {a.laurel}
                  </p>

                  <h3 className="font-display text-[1.8rem] leading-[0.98] tracking-wide text-bone">
                    {a.title}
                  </h3>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d9b46a]">
                    {a.org}
                  </p>

                  <p className="mt-4 text-[13px] leading-relaxed text-bone/70">
                    {a.detail}
                  </p>

                  {(a.link || a.image) && (
                    <a
                      href={a.link || a.image}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                    >
                      View certificate ↗
                    </a>
                  )}

                </div>
              
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
}
