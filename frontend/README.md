# Frontend (E-Tailoring)

Quick notes:

- The backend serves the frontend static files. Start the backend to view the UI at `http://localhost:3000`.
- `src/services/api.js` provides `auth` and `request` helpers that call the backend API at `http://localhost:3000/api` by default.
- Existing pages live under `src/pages/*` and scripts under `src/js/`.

To run locally:

1. Install backend deps and start the server from the `backend` folder:

```powershell
cd backend
npm install
npm start
```

2. Open `http://localhost:3000` in the browser.
