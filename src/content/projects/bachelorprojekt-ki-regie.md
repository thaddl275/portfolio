---
title: KI-Regie gegen Bildregie
role: Bachelorarbeit & Aufnahmeleitung
category: produktion
year: 2026
location: Fernsehstudio der HTWK Leipzig
order: 3
draft: true
cover: ../../assets/projects/bachelorprojekt-ki-regie/01.jpg
gallery:
  - ../../assets/projects/bachelorprojekt-ki-regie/01.jpg
  - ../../assets/projects/bachelorprojekt-ki-regie/02.jpg
  - ../../assets/projects/bachelorprojekt-ki-regie/03.jpg
stats:
  - value: "1,0"
    label: Note der Bachelorarbeit
  - value: "95 %"
    label: Sprecher im Bild bei der KI – Mensch 88 %
  - value: "+3,0 s"
    label: Reaktion der KI auf Sprecherwechsel – Mensch −0,8 s
  - value: "11 / 11"
    label: Befragte bewerten im Blindtest die menschliche Regie höher
---

## Die Frage

Kann ein KI-basiertes Regiesystem die Maßstäbe professioneller Bildregie in einem standardisierten Live-Talk erfüllen? Für meine Bachelorarbeit „Leistungsanalyse KI-basierter Regiesysteme im Vergleich zu menschlichen Schnittentscheidungen in standardisierten Live-Formaten“ habe ich das im direkten Vergleich getestet.

## Der Versuch

Im Juli 2026 lief im Fernsehstudio der HTWK ein Live-Talk mit Moderator und zwei Gästen. Zwei Regien schnitten denselben Take parallel – sechs Kameras an drei Positionen, paarweise höchstens 30 cm auseinander, sodass beide Seiten nahezu dieselben Bilder zur Verfügung hatten.

- **Automatisiert:** MiruSuite 1.2.8 mit drei PTZ-Kameras BirdDog P200 über NDI, ATEM Mini Pro ISO und drei getrennten Mikrofonkanälen. Cut-Style „Balanced“, 3 s Mindestzeit zwischen zwei Schnitten, 200 ms Preset-Verzögerung, Presets an die Mikrofonkanäle gekoppelt, Personen-Tracking abgeschaltet.
- **Menschlich:** Studioregie mit getrennter Bildmischung und drei bemannten Kameras.

## Methode

- Kriterienkatalog mit fünf Kriterien aus einem Experteninterview mit einer Bildregisseurin und aus der Fachliteratur
- Interview mit dem Entwickler zur Systemlogik
- Sekundengenaue Schnitt- und Sprecherprotokolle über 519 Sekunden
- Blindtest mit elf Personen und drei Ausschnitten, ohne dass die Zuordnung der Fassungen bekannt war

## Ergebnisse

Kein Kriterium wurde vollständig erfüllt, zwei eingeschränkt, drei nicht. Die KI hatte den aktiven Sprecher zwar häufiger im Bild (95 % gegenüber 88 %), reagierte aber im Median erst 3,0 s nach einem Sprecherwechsel – die menschliche Regie schnitt schon 0,8 s vorher. 24 % der automatischen Schnitte brachten keine neue Bildinformation, beim Menschen keiner. Im Blindtest bewerteten alle elf Befragten die menschliche Fassung höher, im Mittel um 1,43 Punkte.

Der Kern: Die KI steckt nur in der Wahrnehmung, der Schnitt selbst folgt einem reaktiven Regelwerk. Meine Empfehlung ist deshalb ein teilautomatischer Betrieb.

## Meine Rolle

- Konzeption, Planung und Aufnahmeleitung des Versuchs
- Technischer Aufbau, Einrichtung der MiruSuite und Preset-Belegung
- Beide Interviews, Protokollierung, Auswertung und Blindtest

## Was ich mitnehme

- Was ein System leisten kann, hängt davon ab, wo die KI darin sitzt.
- Die Einrichtung prägt die Ergebnisse stark – eine einzelne Preset-Entscheidung ist direkt in den Daten sichtbar.
- Studiozeit früh sichern und nach jedem Neustart alle Aufnahmeparameter prüfen.
- Objektive Metrik und Befragung müssen dasselbe messen.
