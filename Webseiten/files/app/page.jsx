"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#angebote", label: "Karte" },
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a href="#top" className="logo">
            Bohne <span className="amp">&amp;</span> Zeit
          </a>

          <nav className="nav-desktop" aria-label="Hauptnavigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#angebote" className="btn nav-cta">
              Unsere Karte ansehen
            </a>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Menü öffnen"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          className={`nav-mobile ${navOpen ? "open" : ""}`}
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeNav}>
              {link.label}
            </a>
          ))}
          <a href="#angebote" onClick={closeNav}>
            Unsere Karte ansehen
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero" style={{ padding: 0 }}>
          <svg className="steam" viewBox="0 0 100 140" aria-hidden="true">
            <path d="M30 130 C 10 100, 50 90, 30 60 C 10 30, 50 20, 35 0" />
            <path d="M55 130 C 35 100, 75 90, 55 60 C 35 30, 75 20, 60 0" />
            <path d="M75 130 C 55 100, 95 90, 75 60 C 55 30, 95 20, 80 0" />
          </svg>

          <div className="wrap hero-inner">
            <p className="eyebrow">Rösterei &amp; Kaffeehaus in Lindenberg</p>
            <h1>
              Kaffee mit <em>Zeit</em> genießen.
            </h1>
            <p className="lead">
              Bohne &amp; Zeit ist ein kleines Kaffeehaus für hausgeröstete
              Bohnen, frisch gebackenen Kuchen und ein entspanntes Frühstück
              — ein Ort, an dem der Tag ruhig beginnen darf.
            </p>
            <div className="hero-actions">
              <a href="#angebote" className="btn">
                Unsere Karte ansehen
              </a>
              <a href="#standort" className="btn btn-outline">
                So finden Sie uns
              </a>
            </div>
          </div>
        </section>

        {/* Über uns */}
        <section id="ueber-uns" className="about">
          <div className="wrap about-grid">
            <div className="about-visual">
              <div className="badge">
                <strong>Seit 2016</strong>
                <span>Handgeröstet in kleinen Chargen</span>
              </div>
            </div>

            <div className="about-text">
              <p className="eyebrow">Unser Café</p>
              <h2 style={{ marginBottom: 20 }}>
                Ein ruhiger Ort mitten in der Stadt
              </h2>
              <p>
                Bei uns beginnt der Kaffee nicht an der Theke, sondern in der
                Rösttrommel im Hinterzimmer. Wir rösten wöchentlich in
                kleinen Mengen, damit jede Tasse so frisch wie möglich bei
                Ihnen ankommt.
              </p>
              <p>
                Zwischen warmem Holz, weichem Licht und dem Duft von frisch
                gebackenem Kuchen laden wir Sie ein, kurz innezuhalten — ob
                allein mit einem Buch oder im Gespräch mit Freunden.
              </p>

              <div className="about-stats">
                <div>
                  <strong>8+</strong>
                  <span>Jahre Erfahrung</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>Kaffeesorten</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Handgeröstet</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Angebote */}
        <section id="angebote" className="offers">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Unsere Karte</p>
              <h2>Was wir Ihnen anbieten</h2>
              <p>
                Ausgewählte Röstungen, hausgemachte Kuchen und ein
                unkompliziertes Frühstück — mit Liebe zubereitet, jeden Tag.
              </p>
            </div>

            <div className="offer-grid">
              <article className="offer-card">
                <div className="offer-icon">
                  <CupIcon />
                </div>
                <h3>Kaffee</h3>
                <p>Handgerösteter Filter- und Espressokaffee aus eigener Rösterei.</p>
                <ul className="offer-list">
                  <li>
                    <span>Espresso</span> <strong>3,20 €</strong>
                  </li>
                  <li>
                    <span>Flat White</span> <strong>4,20 €</strong>
                  </li>
                  <li>
                    <span>Filterkaffee (V60)</span> <strong>4,50 €</strong>
                  </li>
                </ul>
              </article>

              <article className="offer-card">
                <div className="offer-icon">
                  <CakeIcon />
                </div>
                <h3>Kuchen</h3>
                <p>Täglich frisch gebacken, in kleinen Mengen, ganz ohne Fertigmischung.</p>
                <ul className="offer-list">
                  <li>
                    <span>Zitronen-Olivenöl-Kuchen</span> <strong>4,00 €</strong>
                  </li>
                  <li>
                    <span>Karottenkuchen</span> <strong>4,20 €</strong>
                  </li>
                  <li>
                    <span>Schokoladentorte</span> <strong>4,50 €</strong>
                  </li>
                </ul>
              </article>

              <article className="offer-card">
                <div className="offer-icon">
                  <BreakfastIcon />
                </div>
                <h3>Frühstück</h3>
                <p>Ein ruhiges Frühstück mit regionalen Zutaten, bis 13 Uhr täglich.</p>
                <ul className="offer-list">
                  <li>
                    <span>Porridge mit Beeren</span> <strong>6,50 €</strong>
                  </li>
                  <li>
                    <span>Avocado-Sauerteigbrot</span> <strong>8,00 €</strong>
                  </li>
                  <li>
                    <span>Frühstücksteller</span> <strong>11,50 €</strong>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Öffnungszeiten & Standort */}
        <section id="oeffnungszeiten" className="info">
          <div className="wrap info-grid">
            <div>
              <p className="eyebrow">Öffnungszeiten</p>
              <h2 style={{ marginBottom: 28 }}>Wann Sie uns finden</h2>
              <ul className="hours-list">
                <li>
                  <span>Montag</span> <span>Ruhetag</span>
                </li>
                <li>
                  <span>Dienstag – Freitag</span> <span>8:00 – 18:00 Uhr</span>
                </li>
                <li>
                  <span>Samstag</span> <span>9:00 – 18:00 Uhr</span>
                </li>
                <li>
                  <span>Sonntag</span> <span>9:00 – 15:00 Uhr</span>
                </li>
              </ul>
            </div>

            <div id="standort">
              <p className="eyebrow">Standort</p>
              <div className="location-card">
                <h3>Bohne &amp; Zeit Kaffeehaus</h3>
                <div className="location-map" role="img" aria-label="Kartenausschnitt zum Standort von Bohne & Zeit"></div>
                <address>
                  Marktplatz 7
                  <br />
                  88161 Lindenberg im Allgäu
                  <br />
                  Deutschland
                </address>
                <a
                  className="btn btn-outline"
                  href="https://www.google.com/maps/search/?api=1&query=Marktplatz+7+88161+Lindenberg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Route planen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="contact">
          <div className="wrap contact-grid">
            <div className="contact-details">
              <p className="eyebrow">Kontakt</p>
              <h2 style={{ marginBottom: 20 }}>Schreiben Sie uns</h2>
              <p>
                Fragen zu Reservierungen, Firmenveranstaltungen oder unserem
                Kaffee? Wir freuen uns, von Ihnen zu hören.
              </p>

              <div className="contact-item">
                <span className="icon">
                  <MailIcon />
                </span>
                <div>
                  <strong>E-Mail</strong>
                  <span>hallo@bohne-und-zeit.de</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">
                  <PhoneIcon />
                </span>
                <div>
                  <strong>Telefon</strong>
                  <span>+49 8381 123456</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">
                  <PinIcon />
                </span>
                <div>
                  <strong>Adresse</strong>
                  <span>Marktplatz 7, 88161 Lindenberg</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <p className="form-success">
                  Danke für Ihre Nachricht! Wir melden uns so schnell wie
                  möglich bei Ihnen.
                </p>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">E-Mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Nachricht</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Wie können wir helfen?"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo">
                Bohne <span className="amp">&amp;</span> Zeit
              </span>
              <p>
                Ein kleines Kaffeehaus in Lindenberg für handgerösteten
                Kaffee, frischen Kuchen und ruhige Momente.
              </p>
            </div>

            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li>Marktplatz 7, 88161 Lindenberg</li>
                <li>+49 8381 123456</li>
                <li>hallo@bohne-und-zeit.de</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Bohne &amp; Zeit Kaffeehaus. Alle Rechte vorbehalten.</span>
            <span>Gestaltet mit Liebe zum Kaffee.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function CupIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3c-.5 1 .5 1.5 0 2.5" />
      <path d="M12 3c-.5 1 .5 1.5 0 2.5" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7" />
      <path d="M2 21h20" />
      <path d="M7 12V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <path d="M12 2v3" />
      <path d="M9 21v-4" />
      <path d="M15 21v-4" />
    </svg>
  );
}

function BreakfastIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="7" />
      <path d="M9 13a3 3 0 0 1 6 0" />
      <path d="M8 4l1.5 3" />
      <path d="M16 4l-1.5 3" />
      <path d="M12 3v3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
