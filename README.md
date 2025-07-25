# Spin & Win

## Installatie

```bash
git clone https://github.com/rowani/spin-wheel.git
cd spin-wheel
```

### Frontend
```bash
cd client
npm install
npm run build
```

### Backend
```bash
cd ../server
npm install
node index.js
```

## Deploy naar Render
- Maak twee services aan op [render.com](https://render.com)
  - **Web service**: map `server`
  - **Static site**: map `client`, build = `npm run build`, output = `build`
- Vergeet niet `REACT_APP_API_URL` toe te voegen aan de environment variables
