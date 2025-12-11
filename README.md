# 📱 Pokedex - Aplicación React

## 🎯 ¿Qué hace este proyecto?

Este proyecto es una **Pokedex interactiva** construida con React que permite a los usuarios explorar el mundo Pokémon. La aplicación:

- **Consulta la PokeAPI**: Obtiene información de hasta 99 Pokémon desde la API pública de Pokémon (https://pokeapi.co)
- **Muestra listado de Pokémon**: Presenta los nombres de todos los Pokémon disponibles en un panel lateral
- **Visualiza imágenes**: Al hacer clic en el nombre de un Pokémon, muestra su imagen oficial en una pantalla de visualización
- **Interfaz estilo Pokedex**: Diseñada con una estética que recuerda a la Pokedex clásica de los videojuegos, con un fondo marrón característico y paneles negros para la visualización

## 🏗️ ¿Está bien estructurado?

**Sí, el proyecto sigue una estructura estándar y bien organizada de React:**

### Estructura de carpetas:
```
Pokedex/
├── public/              # Archivos estáticos (HTML, íconos)
├── src/
│   ├── views/          # Componentes de vistas (Home, NotFound)
│   ├── store/          # Manejo de estado global (Flux pattern)
│   │   ├── flux.js     # Definición del store
│   │   └── appContext.js  # Context API de React
│   ├── layout.js       # Configuración de rutas (React Router)
│   ├── index.js        # Punto de entrada de la aplicación
│   └── index.css       # Estilos globales
├── package.json        # Dependencias y scripts
└── README.md           # Documentación
```

### Buenas prácticas implementadas:
- ✅ **Separación de responsabilidades**: Las vistas están separadas de la lógica de estado
- ✅ **React Router**: Implementación de navegación con rutas definidas
- ✅ **Context API**: Preparado para manejo de estado global (aunque no se está usando activamente aún)
- ✅ **Hooks modernos**: Uso de `useState` y `useEffect` para manejo de estado y efectos
- ✅ **Bootstrap**: Framework CSS para estilos responsivos
- ✅ **Componentización**: Estructura modular que facilita el mantenimiento

### Áreas de mejora potencial:
- La lógica de negocio podría moverse al store/flux para mejor organización
- Los estilos inline podrían separarse mejor en archivos CSS modulares

## ✨ ¿Es simple?

**Sí, el proyecto es bastante simple y accesible:**

### Aspectos simples:
- 🟢 **Pocas dependencias**: Usa solo las bibliotecas esenciales (React, React Router, Bootstrap)
- 🟢 **Una funcionalidad principal**: Mostrar Pokémon y sus imágenes - fácil de entender
- 🟢 **Código legible**: Componentes funcionales con hooks, fáciles de seguir
- 🟢 **API única**: Solo consulta una API externa (PokeAPI)
- 🟢 **Sin backend propio**: Aplicación frontend pura, no requiere servidor
- 🟢 **Create React App**: Configuración estándar sin complejidad adicional

### Nivel de complejidad:
- **Ideal para principiantes** en React que quieren aprender:
  - Llamadas a APIs con `fetch`
  - Manejo de estado con hooks
  - Renderizado condicional
  - Eventos de usuario (onClick)
  - Enrutamiento básico

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 12 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/SebastianGasca/Pokedex.git
   cd Pokedex
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación en modo desarrollo**
   ```bash
   npm start
   ```
   
   La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta las pruebas
- `npm run build` - Genera la versión optimizada para producción

## 🎮 Cómo usar la Pokedex

1. **Al iniciar la aplicación**, verás la interfaz de la Pokedex
2. **En el panel izquierdo** (fondo negro con texto verde), se muestra la lista completa de Pokémon
3. **Haz clic en cualquier nombre** de Pokémon
4. **En el panel derecho** aparecerá la imagen del Pokémon seleccionado
5. El **botón azul circular** en la parte superior cambia el estado (funcionalidad decorativa)

## 🛠️ Tecnologías utilizadas

- **React 16.13.1** - Biblioteca principal de UI
- **React Router 5.2.0** - Manejo de rutas
- **Bootstrap 4.5.0** - Framework CSS
- **PokeAPI** - API de datos de Pokémon
- **Font Awesome** - Íconos
- **Create React App** - Configuración base del proyecto

## 📝 Notas adicionales

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app), lo que proporciona una configuración moderna sin necesidad de configuración manual de webpack, babel, etc.

Para aprender más sobre React, visita la [documentación oficial de React](https://reactjs.org/).

---

**Proyecto creado como ejercicio de aprendizaje de React y consumo de APIs REST** 🎓
