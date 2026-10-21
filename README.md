# ⚡ Elettrotecnica Polimi — Hub Completo di Studio & Simulazione

> Piattaforma web interattiva per la preparazione completa del corso di **Elettrotecnica (ELN / MTM)** del **Politecnico di Milano** (Proff. Dario D'Amore, Lorenzo Codecasa, Paolo Maffezzoni, Sergio Guzzetti • Riferimento: *Circuiti Elettrici* di Renzo Perfetti).

---

## 🌐 Accesso Online Gratuito su GitHub Pages

Una volta attivato GitHub Pages, il sito è raggiungibile ovunque (da iPhone, Android, iPad, Mac o PC) all'indirizzo:
👉 **`https://<tuo-username>.github.io/<nome-repo>/`**

---

## 📦 Cosa Contiene Questa Suite

### 1. 📖 Teoria Completa (1° e 2° Parziale) — `/teoria/`
- **16 Capitoli monografici approfonditi** (11 per il 1° Parziale e 5 per il 2° Parziale).
- Oltre **1.800 formule matematiche** renderizzate in KaTeX con rendering ad altissima nitidezza.
- **Schemi circuitali vettoriali SVG reali** per tutti i teoremi e concetti (Thevenin, Norton, OP-AMP, diodi, risonanza, mutua induzione, transitori, terne trifase, Aron).
- **Motore di ricerca live istantaneo** (Ctrl+K o icona lente) che scansiona teoria, formule ed esempi notevoli svolti.
- **Punti chiave, formule da ricordare e trabocchetti d'esame** commentati dai compiti d'esame storici.
- **Formulario Rapido interattivo** e **Guida Trabocchetti** con ricerca dedicata.

### 2. 📝 Simulatore d'Esame — 1° Parziale — `/simulatore/`
- Banca dati ufficiale di **210 Esercizi d'Esame complessi** (107 Quesiti a scelta multipla + 103 Esercizi numerici a calcolo aperto).
- **Simulazione d'Esame Ufficiale (Stile Polimi / WeBeep)**:
  - Generazione di prove d'esame bilanciate su tutti i 6 macro-argomenti del 1° Parziale.
  - Timer alla rovescia (45/60 minuti) con allerta visiva.
  - Punteggi ufficiali (+2.5 risposta corretta, 0 non data, -0.625 risposta errata).
  - Supporto per numeri decimali sia con virgola (`12,5`) che con punto (`12.5`).
  - Report finale con voto in trentesimi (/30 e /30L) e correzione dettagliata di ogni errore.
- **Modalità Studio / Eserciziario Libero** con filtri avanzati e indizi.

### 3. 🏋️ Gym Quiz Elettrotecnica — `/gym-quiz/`
- **200 Esercizi a calcolo mentale rapido** (100 per il 1° Parziale + 100 per il 2° Parziale).
- Numeri tondi e immediati pensati per allenarsi a mente in palestra, in treno o sui mezzi.
- **Timer di 2 minuti (120s)** per esercizio con opzione Pausa.
- Tastierino numerico su schermo integrato per smartphone e touchscreen.
- Correzione e spiegazione istantanea per ciascuna domanda.

### 4. 📥 Materiali Scaricabili — `/downloads/`
- **Eserciziario Temi d'Esame Versione Estesa (PDF di 406 pagine):** 153 temi d'esame originali con i 99 esercizi del 1° Parziale evidenziati da banner visivo superiore e segnalibri PDF interattivi, più i testi integrali delle prove in itinere 2023 e 2024.
- **App Android Gym Quiz (.apk):** Pacchetto per installare il quiz offline direttamente sul tuo smartphone Android.

---

## 🚀 Come Attivare GitHub Pages (in 2 minuti)

1. Crea una nuova repository su [GitHub.com](https://github.com/new) (es. chiamata `elettrotecnica`).
2. Fai il push di questa cartella su GitHub:
   ```bash
   git remote add origin https://github.com/<tuo-username>/elettrotecnica.git
   git branch -M main
   git push -u origin main
   ```
3. Vai nelle **Settings** della tua repository su GitHub:
   - Clicca sulla scheda **Pages** (nel menu laterale a sinistra).
   - Sotto **Branch**, seleziona `main` e cartella `/ (root)`.
   - Clicca **Save**.
4. Dopo circa 60 secondi il tuo sito sarà online e accessibile per sempre, gratis, su:
   `https://<tuo-username>.github.io/elettrotecnica/`

---

## 💻 Come Avviare in Locale sul Tuo PC

Fai semplicemente doppio click sul file:
- `avvia_hub.bat` (apre la home page nel browser predefinito)

Tutti i file funzionano al 100% anche senza connessione internet grazie alle librerie KaTeX e agli asset SVG incorporati localmente.
