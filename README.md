# CryptoFlux - Cryptocurrency Dashboard

CryptoFlux es una aplicación web moderna para visualizar información de criptomonedas en tiempo real.

El proyecto consume una API externa de criptomonedas, transforma y valida los datos recibidos, permitiendo mostrar información como precios, variaciones, capitalización de mercado e historial de comportamiento.

La aplicación fue desarrollada aplicando buenas prácticas de arquitectura frontend, separación de responsabilidades y manejo eficiente del estado global.

---

## Características principales

- 📈 Visualización de criptomonedas en tiempo real.
- 🔌 Consumo de API REST mediante Axios.
- 🔄 Transformación de datos externos mediante una capa de mapeo.
- ✅ Validación de respuestas usando Zod.
- 🗂️ Gestión del estado global con Zustand.
- 📊 Consulta de historial de precios de criptomonedas.
- 💱 Cotizador dinámico de criptomonedas.
- 📱 Diseño responsive utilizando Tailwind CSS.
- 🧩 Arquitectura basada en componentes reutilizables.

---

## Tecnologías utilizadas

### Frontend

#### ⚛️ React + TypeScript

La interfaz fue construida utilizando React con TypeScript, permitiendo desarrollar componentes reutilizables con tipado fuerte y mayor seguridad durante el desarrollo.

---

#### 🎨 Tailwind CSS

Utilizado para construir una interfaz moderna, responsive y personalizada mediante clases utilitarias.

---

#### 🗂️ Zustand

Se implementó Zustand como solución de manejo de estado global para administrar:

- Lista de criptomonedas.
- Criptomoneda seleccionada.
- Historial de precios.
- Estados de carga.
- Manejo de errores.

Flujo de datos:
