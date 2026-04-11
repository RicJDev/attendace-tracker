# Attending Tracker

Sistema para registrar y gestionar la asistencia de estudiantes. Consta de dos módulos principales:

- **Frontend:** React + TypeScript + Vite (SPA, uso de react-router).
- **Backend:** API en PHP vanilla, gestionando datos con MariaDB. El entorno está preparado para ejecutarse mediante Docker.

## Estructura del proyecto

```
/
├── client/
├── server/
├── .gitignore
└── README.md (este archivo)
```

## Requisitos Previos

- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- Node.js
- pnpm (aunque perfectamente se puede usar cualquier otro)

## Puesta en marcha rápida

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/RicJDev/attending-tracker.git
   cd attending-tracker
   ```

2. **Levanta el backend y la base de datos utilizando Docker:**

   ```bash
   cd server
   docker compose up -d
   ```

3. **Configura y arranca el frontend:**
   ```bash
   cd ../client
   pnpm install
   pnpm run dev
   ```
   El frontend estará disponible en [http://localhost:5173](http://localhost:5173)

## Licencia

[MIT](LICENSE)
