# 🌍 Explorador de Países

Aplicación web desarrollada con **Next.js** que consume la API pública [REST Countries](https://restcountries.com/) y permite explorar información detallada de todos los países del mundo.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) — Framework de React con enrutado estático y dinámico
- TypeScript
- CSS clásico (globals + módulos)
- REST Countries API

---

## ▶️ Cómo ejecutar el proyecto

### 1. Clona el repositorio

```bash
git clone git@github.com:AlejandroDeLaCruzs/Practica2-front-end.git
cd Practica2-front-end
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

### 4. Abre el navegador

```
http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
├── app/
│   ├── page.tsx                  # Página principal — lista todos los países
│   ├── globals.css               # Estilos globales
│   └── country/
│       └── [name]/
│           └── page.tsx          # Página dinámica — detalle de cada país
│
├── components/
│   └── CountryCard.tsx           # Componente reutilizable para cada tarjeta de país
│
├── lib/
│   └── api/
│       └── country.ts            # Funciones para consumir la REST Countries API
│
├── types/
│   └── country.ts                # Tipos TypeScript para los datos de país
│
└── README.md
```

---

## 📄 Páginas y funcionalidades

### `/` — Página principal
- Muestra todos los países obtenidos desde la API.
- Cada país se renderiza con el componente `<CountryCard />`.
- Incluye un **buscador en tiempo real** que filtra por nombre sin recargar la página.

### `/country/[name]` — Detalle del país
- Ruta dinámica generada a partir del nombre del país.
- Muestra: nombre oficial, bandera, capital, región, población e idiomas.
- Incluye un botón para **volver a la página principal**.

---

## 👥 Autores

| Nombre | GitHub |
|--------|--------|
| Tu nombre | [@AlejandroDeLaCruzs]([(https://github.com/AlejandroDeLaCruzs)]) |

