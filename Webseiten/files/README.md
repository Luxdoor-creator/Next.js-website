# Bohne & Zeit — Kaffeehaus Website

Eine einfache, moderne Next.js-Webseite für einen fiktiven Premium-Kaffeeladen.
Gebaut mit Next.js 14 (App Router), React und einfachem CSS — ohne Datenbank
und ohne CMS.

## Projektstruktur

```
/
├── app/
│   ├── page.jsx        Startseite mit allen Sektionen
│   ├── layout.jsx       Root-Layout, Fonts, Metadata
│   └── globals.css      Globale Styles
├── public/
│   └── images/           Ordner für eigene Bilder (aktuell leer)
├── package.json
├── next.config.js
├── .gitignore
└── README.md
```

## Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) ab Version 18.

```bash
npm install
npm run dev
```

Die Seite ist danach unter [http://localhost:3000](http://localhost:3000)
erreichbar.

## Build für Produktion

```bash
npm run build
npm start
```

## Deployment auf Vercel

1. Projekt in ein neues GitHub-Repository pushen.
2. Auf [vercel.com](https://vercel.com) einloggen und "Add New… → Project"
   wählen.
3. Das GitHub-Repository auswählen und importieren.
4. Vercel erkennt Next.js automatisch — keine weiteren Einstellungen nötig.
5. "Deploy" klicken. Fertig.

## Eigene Bilder einbinden

Die Seite verzichtet aktuell bewusst auf externe Bilddateien und nutzt
CSS-Verläufe für den visuellen Bereich, damit das Projekt sofort ohne
zusätzliche Assets läuft. Eigene Fotos können einfach in `public/images/`
abgelegt und z. B. im Hero-Bereich in `app/page.jsx` mit der
`next/image`-Komponente eingebunden werden:

```jsx
import Image from "next/image";

<Image src="/images/cafe-hero.jpg" alt="Innenraum des Cafés" fill />
```

## Inhalte anpassen

Alle Texte, Preise, Öffnungszeiten und Kontaktdaten befinden sich direkt in
`app/page.jsx` und können dort ohne weitere Konfiguration angepasst werden.
Farben und Typografie lassen sich zentral über die CSS-Variablen am Anfang
von `app/globals.css` steuern.
