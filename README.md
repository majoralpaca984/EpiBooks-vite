# 📚 EpiBooks-vite

Benvenuto su **EpiBooks**, una libreria online realizzata con React + Vite + Bootstrap 5.  
Questa applicazione ti permette di cercare libri, visualizzarne i dettagli e gestire recensioni attraverso chiamate API REST.

## 🚀 Funzionalità principali

- Implementata la visualizzazione dei libri provenienti da molteplici file JSON.
- Ricerca istantanea per titolo, per migliorare usabilità e rapidità.
- Selezione interattiva di un libro, evidenziato con un bordo rosso.
- Visualizzazione dinamica dei commenti relativi al libro selezionato.
- Possibilità di aggiungere un nuovo commento tramite form dedicato.
- Funzionalità di modifica inline dei commenti per una gestione immediata.
- Possibilità di eliminare commenti non desiderati.
- Layout responsive a due colonne, ottimizzato con Bootstrap 5.
- Rimozione automatica dei duplicati dai dati.
- Integrazione completa delle API per la gestione delle recensioni:
  - **GET**: recupero delle recensioni tramite `useEffect` e `fetch`
  - **POST**: invio di nuove recensioni tramite form
  - **PUT** e **DELETE**: aggiornamento ed eliminazione delle recensioni
- Implementata l'autenticazione con Bearer Token nelle chiamate API.


## 📂 Struttura del progetto

```
src/
├── components/
│   ├── MyNav.jsx
│   ├── MyFooter.jsx
│   ├── Welcome.jsx
│   ├── AllTheBooks.jsx
│   ├── SingleBook.jsx
│   ├── CommentArea.jsx
│   ├── CommentsList.jsx
│   └── AddComment.jsx
├── data/
│   ├── romance.json
│   ├── scifi.json
│   └── history.json
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

---

## 💬 Integrazione API

- [x] **GET** recensioni per ASIN → `useEffect` + `fetch`
- [x] **POST** recensioni con form
- [x] **PUT** e **DELETE** recensioni
- [x] Autenticazione con Bearer Token nell’header

---


## 📡 Come avviare il progetto localmente

```bash
npm install
npm run dev
```

---

## 📬 Credits

Sviluppato durante il percorso **EPICODE – Full Stack Web Development Bootcamp**

---

## 📎 Licenza

MIT License
