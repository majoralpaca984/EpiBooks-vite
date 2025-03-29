# 📚 EpiBooks-vite

Benvenuto su **EpiBooks**, una libreria online realizzata con React + Vite + Bootstrap 5.  
Questa applicazione ti permette di cercare libri, visualizzarne i dettagli e gestire recensioni attraverso chiamate API REST.



## 🚀 Funzionalità principali

- ✅ Visualizzazione dei libri da più file JSON
- 🔍 Ricerca istantanea per titolo
- 📌 Selezione di un libro con bordo rosso
- 💬 Visualizzazione dei commenti per il libro selezionato
- ➕ Aggiunta di un nuovo commento
- ✏️ Modifica inline del commento
- ❌ Eliminazione del commento
- 🎯 Layout responsive a due colonne con Bootstrap
- 🚫 Rimozione dei duplicati dai dati

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
│   ├── fantasy.json
│   ├── horror.json
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
- [ ] **PUT** e **DELETE** recensioni (extra da completare)
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
