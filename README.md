# 📚 EpiBooks – React + Vite Bookstore Project

Benvenuto nel progetto **EpiBooks**, una libreria online realizzata con **React + Vite**.  
L'applicazione permette di esplorare una raccolta di libri, visualizzare i dettagli, selezionare un libro, filtrarlo per titolo e gestire recensioni tramite API REST.

---

## 🚀 Tecnologie utilizzate

- React 19
- Vite
- Bootstrap 5.3 + React-Bootstrap
- REST API Integration (GET, POST, PUT, DELETE)

---

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

## 🖼️ Funzionalità principali

- ✅ Navbar responsive con React-Bootstrap
- ✅ Footer responsive
- ✅ Messaggio di benvenuto con Alert Bootstrap
- ✅ Griglia di libri visualizzati tramite `.json`
- ✅ Componente `SingleBook` cliccabile con bordo rosso quando selezionato
- ✅ Ricerca tramite input controllato per filtrare i titoli dei libri
- ✅ Caricamento dinamico delle recensioni con `CommentArea`
- ✅ Spinner durante il caricamento delle recensioni
- ✅ Gestione errori
- ✅ Aggiunta recensioni tramite `AddComment` e POST API

---

## 💬 Integrazione API

- [x] **GET** recensioni per ASIN → `useEffect` + `fetch`
- [x] **POST** recensioni con form
- [ ] **PUT** e **DELETE** recensioni (extra da completare)
- [x] Autenticazione con Bearer Token nell’header

---

## 🔒 Sicurezza Token API (nota importante)

> Il token non è nascosto perché questo è un progetto frontend pubblicato su GitHub Pages.  
Per maggiore sicurezza, il token andrebbe gestito tramite **.env** (solo lato backend) o **proxy server**, ma in un progetto pubblico frontend è comunque visibile.

---

## 📡 Come avviare il progetto localmente

```bash
npm install
npm run dev
```

---

## 🌐 Deploy GitHub Pages

Nel file `vite.config.js` assicurati di avere:

```js
export default defineConfig({
  base: '/EpiBooks-vite/',
  plugins: [react()],
})
```

E aggiungi in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

Per pubblicare:

```bash
npm run build
npm run deploy
```

---

## 📬 Credits

Sviluppato durante il percorso **EPICODE – Full Stack Web Development Bootcamp**

---

## 📎 Licenza

MIT License
