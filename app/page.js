import PortfolioInteractions from "./PortfolioInteractions";

const navLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Stack", "#stack"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Custom Web Apps & SaaS",
    text: "Tailored web applications for businesses that have outgrown off-the-shelf software and need tools shaped around their own workflows.",
    points: [
      "Specialised management systems - scheduling, client records & billing in one app",
      "Secure client portals for B2B teams",
      "Micro-SaaS for niche, subscription audiences",
    ],
  },
  {
    title: "Internal Business Systems",
    text: "ERPs and dashboards that run a company behind the scenes - built to map cleanly onto how your team actually works.",
    points: [
      "Supply-chain & inventory ERPs, with offline-first sync for field work",
      "Custom analytics dashboards from messy business data",
      "Automated workflow & API integrations",
    ],
  },
  {
    title: "Desktop Utilities & Apps",
    text: "Cross-platform desktop software built with web technologies (Electron) for work that does not belong in a browser.",
    points: [
      "OS customisation & productivity utilities",
      "Local processing apps for sensitive files & databases",
      "Hardware & local-network integrations",
    ],
  },
  {
    title: "Interactive Web Experiences",
    text: "Standout web experiences that go beyond flat pages - for brands that want to be remembered.",
    points: [
      "3D product configurators with WebGL / Three.js",
      "High-end marketing sites with rich motion",
      "Scroll-triggered & SVG animation",
    ],
  },
  {
    title: "CMS & E-commerce",
    text: "Advanced WordPress and e-commerce builds - performant, custom architecture rather than off-the-shelf templates.",
    points: [
      "Headless commerce with fast, custom frontends",
      "Custom WordPress plugins for specific business logic",
      "WooCommerce store setup & maintenance",
    ],
  },
];

const stack = [
  ["Languages", ["JavaScript", "TypeScript", "SQL", "HTML & CSS"]],
  [
    "Backend",
    ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Authentication"],
  ],
  ["Frontend", ["React", "HTML5", "CSS3", "Responsive UI"]],
  ["Databases", ["PostgreSQL", "MySQL", "MongoDB"]],
  [
    "Tools & Platforms",
    ["Git & GitHub", "WordPress", "Electron", "Documentation"],
  ],
  [
    "Foundations",
    ["System design", "Database design", "Backend architecture", "Testing & debugging"],
  ],
];

const work = [
  {
    type: "WordPress · Live",
    year: "2025",
    title: "Garci Foods",
    text: "A live WordPress website for Garci Foods, a food brand - built to give the business a clean, professional web presence that is fast, mobile-friendly, and easy for the team to update after handover.",
    tags: ["WordPress", "Custom theme", "Responsive", "SEO"],
    link: "https://www.garcifoods.com/",
    linkText: "Visit site",
  },
  {
    type: "ERP System",
    year: "2025",
    title: "Kithul Flow Ops",
    text: "A production management system for kithul (treacle & jaggery) product workflows - covering field collection, processing, packaging, labeling, inventory, orders, finance, and administration. Built around role-based workflows, batch traceability, and clean database design with reporting.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "React"],
  },
  {
    type: "Web App",
    year: "2024",
    title: "NoteNest",
    text: "A note management application for creating, organising, and managing personal notes through a clean, simple interface. A focused project for sharpening application structure, user-centred design, and practical data handling.",
    tags: ["JavaScript", "UI design", "Data handling"],
  },
  {
    type: "Open Source",
    year: "Ongoing",
    title: "GitHub Developer Profile",
    text: "My public GitHub profile and repositories, documenting a backend-focused learning journey - APIs, databases, and scalable web applications, with an emphasis on clear documentation and readable code.",
    tags: ["Documentation", "APIs", "Open source"],
    link: "https://github.com/Deshan-Samarathunga",
    linkText: "View GitHub",
  },
];

const contactLinks = [
  ["Email", "mailto:deshansamarathunga.net@gmail.com", "deshansamarathunga.net@gmail.com"],
  ["Phone", "tel:+94778688875", "+94 77 868 8875"],
  [
    "GitHub",
    "https://github.com/Deshan-Samarathunga",
    "github.com/Deshan-Samarathunga",
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/ndeshan-samarathunga/",
    "linkedin.com/in/ndeshan-samarathunga",
  ],
];

function SectionHead({ index, title }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function CustomCursor() {
  return (
    <div className="cursor" id="cursor" aria-hidden="true">
      <svg
        className="cursor-arrow"
        width="38"
        height="38"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill"
          d="M 3 3 L 10 28 L 15 19 L 24 30 L 30 24 L 19 15 L 28 10 Z"
        />
        <path
          className="stroke"
          d="M 3 3 L 10 28 L 15 19 L 24 30 L 30 24 L 19 15 L 28 10 Z"
        />
      </svg>
      <svg
        className="cursor-hand"
        width="38"
        height="38"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill"
          d="M 12 16 L 12 2 L 18 2 L 18 16 L 24 16 L 24 18 L 29 18 L 29 20 L 34 20 L 34 26 L 26 34 L 12 34 L 12 32 L 2 22 L 6 18 L 12 24 Z"
        />
        <path
          className="stroke"
          d="M 12 16 L 12 2 L 18 2 L 18 16 L 24 16 L 24 18 L 29 18 L 29 20 L 34 20 L 34 26 L 26 34 L 12 34 L 12 32 L 2 22 L 6 18 L 12 24 Z"
        />
        <path className="stroke" d="M 18 16 L 18 28 M 24 18 L 24 28 M 29 20 L 29 28" />
      </svg>
    </div>
  );
}

function Header() {
  return (
    <>
      <header className="site-header" id="site-header">
        <a className="brand" href="#top" data-hover>
          <span className="brand-mark">DS</span>
          <span className="brand-name">Deshan Samarathunga</span>
        </a>
        <nav className="main-nav" aria-label="Primary">
          {navLinks.map(([label, href]) => (
            <a href={href} data-hover key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact" data-hover>
          Get in touch
        </a>
        <button
          className="nav-toggle"
          id="nav-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
        {navLinks.map(([label, href], index) => (
          <a href={href} data-hover key={href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}

function Hero() {
  const marquee = [
    "WEB APPS",
    "CUSTOM ERP",
    "WORDPRESS",
    "REST APIs",
    "DATABASES",
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-status" data-reveal>
          <span className="dot" /> Available for new projects
        </div>
        <h1 className="hero-title" data-reveal>
          I build <mark>web apps</mark>,<br />
          <mark>ERP systems</mark> &amp;
          <br />
          <mark>WordPress</mark> sites.
        </h1>
        <p className="hero-lead" data-reveal>
          Full-stack developer focused on the backend - from database design and business
          logic to clean, dependable interfaces. I turn real-world workflows into software
          that teams actually use.
        </p>
        <div className="hero-actions" data-reveal>
          <a className="btn btn-primary" href="#work" data-hover>
            View my work &rarr;
          </a>
          <a className="btn btn-ghost" href="#contact" data-hover>
            Get in touch
          </a>
        </div>
        <ul className="hero-stats" data-reveal>
          <li>
            <strong>Full-Stack</strong>
            <span>Backend-focused</span>
          </li>
          <li>
            <strong>ERP</strong>
            <span>Custom systems</span>
          </li>
          <li>
            <strong>SLIIT</strong>
            <span>BSc (Hons) IT</span>
          </li>
        </ul>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <span> &#9733;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <SectionHead index="01" title="About" />
      <div className="about-grid">
        <div className="about-card panel" data-reveal>
          <p className="about-lead">
            I&rsquo;m Deshan, a web application developer from Sri Lanka and a final-year IT
            undergraduate at SLIIT.
          </p>
          <p>
            I specialise in building custom web applications and ERP systems - the kind of
            software that runs a business behind the scenes: inventory, orders, finance,
            role-based access, and reporting. I care most about what happens beneath the
            interface, where data, business logic, authentication, and workflows all have to
            fit together cleanly.
          </p>
          <p>
            Alongside custom development, I also build and maintain WordPress sites for
            clients who need a polished web presence quickly. My goal is to grow into a
            backend architect who designs systems that are secure, maintainable, and built to
            scale.
          </p>
          <a className="text-link" href="#work" data-hover>
            See what I&rsquo;ve built &rarr;
          </a>
        </div>
        <aside className="about-side" data-reveal>
          {[
            ["Based in", "Sri Lanka"],
            ["Education", "BSc (Hons) in IT - SLIIT"],
            ["Focus", "Backend & system design"],
            ["Currently", "Open to new projects"],
          ].map(([label, value]) => (
            <div className="panel info-block" key={label}>
              <span className="info-label">{label}</span>
              <span className="info-value">{value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <SectionHead index="02" title="What I do" />
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card panel" data-reveal data-hover key={service.title}>
            <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul className="service-points">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section stack" id="stack">
      <SectionHead index="03" title="Tech stack" />
      <div className="stack-grid">
        {stack.map(([title, items]) => (
          <div className="stack-col panel" data-reveal key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work" id="work">
      <SectionHead index="04" title="Selected work" />
      <div className="work-list">
        {work.map((item) => (
          <article className="work-item panel" data-reveal data-hover key={item.title}>
            <div className="work-meta">
              <span className="work-type">{item.type}</span>
              <span className="work-year">{item.year}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul className="work-tags">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {item.link ? (
              <a
                className="work-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                data-hover
              >
                {item.linkText} &rarr;
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-panel panel" data-reveal>
        <div className="contact-left">
          <span className="section-index">05</span>
          <h2 className="contact-title">
            Let&rsquo;s build
            <br />
            something.
          </h2>
          <p>
            Have a web app, ERP, or WordPress project in mind? Tell me what you need built
            and I&rsquo;ll get back to you within a day.
          </p>
          <a
            className="contact-email"
            href="mailto:deshansamarathunga.net@gmail.com"
            data-hover
          >
            deshansamarathunga.net@gmail.com
          </a>
        </div>
        <div className="contact-right">
          {contactLinks.map(([label, href, text]) => {
            const external = href.startsWith("https://");
            return (
              <a
                className="contact-link"
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                data-hover
                key={label}
              >
                <span>{label}</span>
                <strong>{text}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-tag">// LOADING PORTFOLIO</div>
        <div className="preloader-name">
          DESHAN
          <br />
          SAMARATHUNGA
        </div>
        <div className="preloader-bar">
          <span className="preloader-fill" id="preloader-fill" />
        </div>
        <div className="preloader-count">
          <span id="preloader-percent">00</span>%
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PortfolioInteractions />
      <Preloader />
      <CustomCursor />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Stack />
        <Work />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>&copy; 2026 Deshan Samarathunga</span>
        <a
          href="https://github.com/Deshan-Samarathunga"
          target="_blank"
          rel="noreferrer"
          data-hover
        >
          GitHub
        </a>
        <span>Web Apps &middot; ERP &middot; WordPress</span>
      </footer>
    </>
  );
}
