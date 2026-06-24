# Novax Digital Website

Astro-Website fuer die Novax Digital GmbH als digitale Unternehmensgruppe / Digital Venture Studio.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Der Build fuehrt `astro check` und anschliessend `astro build` aus. Die Seite ist statisch generierbar; es ist aktuell kein SSR-Adapter eingebunden.

## Kontaktformular

Das Kontaktformular in `src/components/ContactForm.astro` ist clientseitig validiert und enthaelt ein Honeypot-Feld. Da aktuell kein SSR-Adapter, API-Endpunkt oder Form-Service konfiguriert ist, wird kein Fake-Erfolg angezeigt. Nach erfolgreicher Validierung wird stattdessen ein vorausgefuellter `mailto:`-Link angeboten.

Fuer Produktion gibt es zwei saubere Optionen:

1. SSR-Adapter konfigurieren und eine Astro API Route unter `src/pages/api/contact.ts` ergaenzen.
2. Einen geprueften Form-Service anbinden und die `action`/`method`-Konfiguration im Formular ersetzen.

Empfaengeradressen und Service-Credentials muessen ueber Environment Variables gepflegt werden. Keine Secrets ins Repository schreiben.

## Offene Inhalte

- Finale Impressumsadresse juristisch/geschaeftlich pruefen.
- Zentrale Novax-E-Mail pruefen und Telefonnummer ergaenzen, falls eine zentrale Nummer genutzt werden soll.
- Finale Datenschutzerklaerung juristisch erstellen oder pruefen.
- Echte Logo-/Brand-Assets fuer Novax und die Projekte ergaenzen, falls vorhanden. Aktuell nutzt die Seite hochwertige typografische Platzhalter.
