import Image from "next/image";
import {
  profile,
  stats,
  experience,
  projects,
  skills,
  education,
  certificates,
  languages,
  softSkills,
  interests,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden />

      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            <span className="logo-mark" aria-hidden />
            {profile.name}
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#about">About</a>
            <a href="#experience" className="hide-sm">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills" className="hide-sm">Skills</a>
            <a href="#education" className="hide-sm">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero-top rise">
            <Image
              src="/aymen.jpg"
              alt={`Portrait of ${profile.name}`}
              width={180}
              height={180}
              className="avatar"
              priority
            />
            <span className="status">
              <span className="dot" aria-hidden /> Open to opportunities
            </span>
          </div>
          <h1 className="rise rise-2">{profile.name}</h1>
          <p className="role rise rise-3">{profile.title}</p>
          <p className="tagline rise rise-3">{profile.tagline}</p>
          <div className="cta rise rise-4">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn" href={profile.resume} download>
              Download resume ↓
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          </div>

          <div className="stats rise rise-4">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about">
          <p className="eyebrow">About</p>
          <h2>Engineering mindset, developer toolkit.</h2>
          <p className="about-text">{profile.summary}</p>
          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">{profile.location}</span>
            </div>
            <a className="contact-item" href={`mailto:${profile.email}`}>
              <span className="contact-label">Email</span>
              <span className="contact-value">{profile.email}</span>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <p className="eyebrow">Experience</p>
          <h2>Where I&apos;ve worked.</h2>
          <div className="stack">
            {experience.map((e) => (
              <article className="card" key={e.company}>
                <div className="card-head">
                  <h3 className="card-title">{e.role}</h3>
                  <span className="card-meta">{e.period}</span>
                </div>
                <p className="card-sub">
                  {e.company} · {e.place}
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <p className="eyebrow">Projects</p>
          <h2>Things I&apos;ve built.</h2>
          <div className="grid-2">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className="card-head">
                  <h3 className="card-title">{p.name}</h3>
                  <span className="badge">{p.kind}</span>
                </div>
                <p className="card-sub">{p.description}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              More on GitHub ↗
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <p className="eyebrow">Skills</p>
          <h2>Tools of the trade.</h2>
          <div>
            {skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <div className="skill-name">{g.group}</div>
                <div className="tag-row">
                  {g.items.map((i) => (
                    <span className="tag" key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <p className="eyebrow">Education &amp; Training</p>
          <h2>Always learning.</h2>
          <div className="stack">
            {education.map((e) => (
              <article className="card" key={e.title}>
                <div className="card-head">
                  <h3 className="card-title">{e.title}</h3>
                  <span className="card-meta">{e.period}</span>
                </div>
                <p className="card-sub">
                  {e.school}
                  {e.place ? ` · ${e.place}` : ""}
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="sub-title" style={{ marginTop: 40 }}>More certificates</h3>
          <div className="cert-grid">
            {certificates.map((c) => (
              <div className="cert" key={c.name}>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal */}
        <section id="personal">
          <p className="eyebrow">Beyond code</p>
          <h2>A bit more about me.</h2>
          <div className="grid-2">
            <div className="card">
              <h3 className="sub-title">Languages</h3>
              {languages.map((l) => (
                <div className="lang-row" key={l.name}>
                  <span>{l.name}</span>
                  <span className="pips" aria-label={`${l.level} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={n <= l.level ? "pip on" : "pip"} />
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="card">
              <h3 className="sub-title">Soft skills</h3>
              <div className="tag-row" style={{ marginTop: 0 }}>
                {softSkills.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
              <h3 className="sub-title" style={{ marginTop: 28 }}>Interests</h3>
              <div className="tag-row" style={{ marginTop: 0 }}>
                {interests.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something together.</h2>
          <p className="about-text">
            I&apos;m looking for a collaborative team where I can contribute to impactful projects
            and keep growing. The fastest way to reach me is by email.
          </p>
          <div className="contact-list">
            <a className="contact-item" href={`mailto:${profile.email}`}>
              <span className="contact-label">Email</span>
              <span className="contact-value">{profile.email}</span>
            </a>
            <a className="contact-item" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{profile.phone}</span>
            </a>
            <a className="contact-item" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">/aymen-hajjej ↗</span>
            </a>
            <a className="contact-item" href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">/AymenHAJJEJ ↗</span>
            </a>
          </div>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href={profile.resume} download>
              Download resume (PDF) ↓
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> · Deployed on{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
          </span>
        </div>
      </footer>
    </>
  );
}
