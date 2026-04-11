# Attending Tracker

[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)

Sistema para registrar y gestionar la asistencia de estudiantes en tiempo real.  
Ideal para profesores y administradores educativos.

<!-- ![Vista previa de la interfaz](screenshot.png) -->

## Características principales

- Registro de asistencia diaria
<!-- - Panel de control con reportes por estudiante/curso. -->
<!-- - Exportación a CSV y PDF. -->
- API REST documentada.

## Tecnologías

- **Frontend:** React + TypeScript + Vite + React Router
- **Backend:** PHP vanilla (sin frameworks)
- **Base de datos:** MariaDB
- **Contenedores:** Docker + Docker Compose

## Requisitos previos

- Docker y Docker Compose
- Node.js 18+ y pnpm (o npm/yarn)

## Instalación y ejecución

1. Clona el repositorio y entra en la carpeta:

   ```bash
   git clone https://github.com/RicJDev/attending-tracker.git
   cd attending-tracker
   ```

2. **Backend y base de datos** (usando Docker):

   ```bash
   cd server
   cp .env.example .env   # si existe; si no, crea uno con DB_PASSWORD, etc.
   docker compose up -d
   cd ..
   ```

3. **Frontend**:

   ```bash
   cd client
   pnpm install
   pnpm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173)

<!-- 
## API endpoints principales

| Método | Endpoint              | Descripción                     |
|--------|-----------------------|---------------------------------|
| GET    | /api/students         | Lista todos los estudiantes     |
| POST   | /api/attendance       | Registrar asistencia            |
| GET    | /api/reports/:courseId| Obtener reporte de un curso     |
-->

