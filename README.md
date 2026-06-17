# MathStats

Calculadora de Estadística y Probabilidad — aplicación web full-stack con React + Vite y Express + SQL Server.

## Funcionalidades

- **Estadística**: cálculo de media, mediana, moda, varianza, desviación estándar y rango.
- **Probabilidad**: permutaciones P(n,r), combinaciones C(n,r) y probabilidad simple.
- **Autenticación**: registro e inicio de sesión de usuarios.
- **Historial**: guardado automático de cada cálculo con consulta en vista dedicada.
- **Noticias**: integración con NewsAPI para noticias de ciencia y tecnología.
- **Información**: explicación de los conceptos estadísticos y probabilísticos.
- **Equipo y Contacto**: secciones informativas del proyecto.

## Tecnologías

### Frontend
- React 19 + Vite 8
- react-router-dom (enrutamiento)
- react-icons (iconografía)
- CSS Modules (estilos encapsulados)
- Vitest + Testing Library (pruebas unitarias)

### Backend
- Node.js + Express
- SQL Server (driver mssql)
- dotenv (variables de entorno)
- cors (comunicación entre frontend y backend)

## Requisitos previos

1. **Node.js** v18 o superior
2. **SQL Server** corriendo (local o remoto)
3. **npm** (incluido con Node.js)

## Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd P2Proyecto2-G8
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_PORT=1433
DB_NAME=MathStats
DB_USER=sa
DB_PASS=sa
SERVER_PORT=4000
NEWSAPI_URL=  # Opcional: URL personalizada de NewsAPI
```

> Si no se configura `NEWSAPI_URL`, el servidor usará una API Key por defecto incluida en el código.

### 4. Crear la base de datos

Ejecutar en SQL Server Management Studio o cualquier cliente SQL:

```sql
CREATE DATABASE MathStats;
GO

USE MathStats;
GO

CREATE TABLE usuarios (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(100) NOT NULL,
    fecha_creacion DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE historial (
    id INT PRIMARY KEY IDENTITY(1,1),
    usuarioId INT NOT NULL,
    tipoCalculo NVARCHAR(100) NOT NULL,
    datosIngresados NVARCHAR(MAX) NOT NULL,
    resultado NVARCHAR(MAX) NOT NULL,
    fecha DATETIME2 DEFAULT SYSUTCDATETIME(),
    CONSTRAINT FK_historial_usuario FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
GO
```

## Ejecución

Abrir **dos terminales** en la raíz del proyecto:

### Terminal 1 — Backend (servidor)

```bash
npm run server
```

Debe mostrar:
```
✅ Conectado a SQL Server
Servidor en funcionamiento en http://localhost:4000
```

### Terminal 2 — Frontend (React)

```bash
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

## Pruebas unitarias

```bash
# Una sola ejecución
npm test

# En modo watch (se re-ejecutan al guardar cambios)
npm run test:watch
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el frontend en modo desarrollo |
| `npm run server` | Inicia el backend (Express + SQL Server) |
| `npm run build` | Compila el frontend para producción |
| `npm run preview` | Previsualiza la compilación de producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run test:watch` | Ejecuta pruebas en modo watch |

## Estructura del proyecto

```
P2Proyecto2-G8/
├── .env                  # Variables de entorno (BD, servidor)
├── server.js             # Backend Express con SQL Server
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── vitest.config.js      # Configuración de Vitest
├── index.html            # Punto de entrada HTML
├── public/               # Archivos estáticos
├── src/
│   ├── main.jsx          # Punto de entrada de React
│   ├── App.jsx           # Componente raíz con rutas y estado
│   ├── index.css         # Estilos globales
│   ├── setupTests.js     # Configuración de Testing Library
│   ├── components/       # Componentes reutilizables
│   │   ├── Header/       # Barra de navegación
│   │   ├── Footer/       # Pie de página
│   │   ├── Layout/       # Layout principal
│   │   ├── CalculatorForm/  # Formulario de cálculo genérico
│   │   └── ResultCard/   # Tarjeta de resultado genérica
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home/         # Inicio
│   │   ├── Login/        # Inicio de sesión
│   │   ├── Register/     # Registro de usuarios
│   │   ├── Statistics/   # Calculadora estadística
│   │   ├── Probability/  # Calculadora probabilística
│   │   ├── History/      # Historial de cálculos
│   │   ├── News/         # Noticias
│   │   ├── Info/         # Información conceptual
│   │   ├── Team/         # Equipo de trabajo
│   │   └── Contact/      # Contacto
│   ├── services/         # Servicios de API
│   │   ├── authService.js
│   │   ├── historyService.js
│   │   └── newsService.js
│   └── utils/            # Funciones utilitarias
│       ├── dbClient.js
│       ├── statistics.js
│       └── probability.js
└── dist/                 # Compilación de producción
```
