# Spin & Win App

Een interactieve Pokémon draaiwiel-app. Gebouwd met React en Node.js, gehost via Render.

## Inhoud
- `client/`: React frontend
- `server/`: Express backend

## Instructies

1. **Installatie (root directory):**
```bash
cd client && npm install
cd ../server && npm install
```

2. **Start lokaal:**
```bash
cd server && npm start
cd ../client && npm start
```

3. **Deployen op Render:**
- Voeg beide mappen toe als aparte services
- Voor de frontend: set `REACT_APP_API_URL` naar je backend URL