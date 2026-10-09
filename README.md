# Portfolio – thadeuszwiener.de

Gebaut mit [Astro](https://astro.build), gehostet auf GitHub Pages.

## Lokal starten

```bash
npm install
npm run dev
```

Dann http://localhost:4321 öffnen.

## Neues Projekt hinzufügen

1. Bilder in einen neuen Ordner legen: `src/assets/projects/<projekt-name>/`
2. Eine Datei `src/content/projects/<projekt-name>.md` anlegen (am einfachsten eine bestehende kopieren).
3. Im Kopf der Datei ausfüllen:
   - `title`, `role` – Titel und deine Rolle
   - `category` – eine von: `licht`, `produktion`, `kamera`, `development` (neue Kategorien in `src/content.config.ts`)
   - `year`, `location` – optional
   - `order` – Reihenfolge (kleiner = weiter oben)
   - `cover` – Titelbild, `gallery` – alle Bilder der Galerie
   - `credits`, `links` – optional
4. Darunter den Beschreibungstext schreiben.
5. `git add . && git commit -m "Neues Projekt" && git push` – die Seite aktualisiert sich nach ca. 1–2 Minuten automatisch.

Bilder dürfen groß sein – Astro verkleinert und komprimiert sie beim Build automatisch.
