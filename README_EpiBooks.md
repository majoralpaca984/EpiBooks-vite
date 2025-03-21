# 📚 EpiBooks – React + Vite Bookstore Project

Benvenuto nel progetto **EpiBooks**, una libreria online realizzata con **React + Vite**.  
L'applicazione permette di esplorare una raccolta di libri, visualizzare i dettagli, selezionare un libro, filtrarlo per titolo e (prossimamente) aggiungere recensioni tramite API REST.

---

## 🚀 Tecnologie utilizzate

- React 18
- Vite
- Bootstrap 5.3 + React-Bootstrap
- REST API Integration (GET, POST, PUT, DELETE)

---

## 📂 Struttura del progetto

```
src/
├── components/
│   ├── AllTheBooks.jsx
│   ├── MyFooter.jsx
│   ├── MyNav.jsx
│   ├── SingleBook.jsx
│   ├── Welcome.jsx
│   └── (CommentArea, CommentList, AddComment - in arrivo)
├── data/
│   ├── fantasy.json
│   ├── horror.json
│   ├── romance.json
│   ├── scifi.json
│   └── history.json
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🖼️ Funzionalità attuali

- ✅ Navbar con link statici
- ✅ Footer responsive
- ✅ Messaggio di benvenuto
- ✅ Griglia di copertine dei libri
- ✅ Ricerca filtro per titolo
- ✅ Highlight bordo rosso sul libro selezionato

---

## 📡 Integrazione API (in corso...)

- [x] GET recensioni per ogni libro (con fetch e useEffect)
- [ ] POST recensione tramite form
- [ ] DELETE e PUT recensioni
- [ ] Autenticazione con Bearer Token

---

## 🛠️ Come avviare il progetto in locale

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
