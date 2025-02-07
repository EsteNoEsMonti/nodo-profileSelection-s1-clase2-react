# Profile Selector - React + Vite + TailwindCSS v4

Este proyecto es un selector de perfiles similar a Netflix, desarrollado con **React**, **Vite** y **TailwindCSS v4**. Permite a los usuarios elegir un perfil antes de ingresar a la plataforma.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y eficiente para aplicaciones React.
- **TailwindCSS v4**: Framework de CSS para estilizar los componentes con clases utilitarias.

## Instalación y Uso

### 1. Clonar el repositorio
```sh
git clone https://github.com/EsteNoEsMonti/nodo-profileSelection-s1-clase2-react
cd nodo-profileSelection-s1-clase2-react
```

### 2. Instalar dependencias
```sh
npm install
```

### 3. Ejecutar en modo desarrollo
```sh
npm run dev
```

El proyecto estará disponible en `http://localhost:5173/` (o el puerto indicado por Vite).

## Estructura del Proyecto

```
profile-selector/
│── src/
│   ├── components/
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileSection.jsx
│   ├── assets/
│   │   ├── profile1.png
│   ├── App.jsx
│── public/
│── package.json
│── tailwind.config.js
│── vite.config.js
│── README.md
```

## Componentes

### **1. App.jsx**
El punto de entrada de la aplicación que renderiza `ProfileSection`.

### **2. ProfileSection.jsx**
Renderiza la selección de perfiles y contiene la lógica para mostrar los perfiles disponibles.

### **3. ProfileCard.jsx**
Representa una tarjeta de perfil con imagen y nombre.

## Personalización

- Puedes cambiar las imágenes de perfil en la carpeta `src/assets/`.
- Para modificar los estilos, edita las clases de TailwindCSS en los archivos de los componentes.

## Mejoras Futuras

- **Renderizado dinámico de perfiles**: Actualmente, los perfiles están hardcodeados.
- **Integración con una API** para obtener los perfiles de una base de datos. (Avanzado, lo veremos en el Sprint 4)
- **Autenticación de usuario** para personalizar la experiencia. (Super avanzado)

---

🚀 estenoesmonti 😎

