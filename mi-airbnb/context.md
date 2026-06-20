# Contexto del proyecto: Clon educativo de Airbnb

## 1) Descripcion de paginas

### Home (/)
Pantalla de descubrimiento inicial. Muestra una barra superior con logo, buscador y acciones de usuario, una barra horizontal de categorias y una cuadricula de alojamientos destacados. Permite filtrar en tiempo real por texto y por categoria para que el usuario encuentre opciones rapidamente.

### Catalogo (/catalog)
Vista de exploracion completa de alojamientos. Reutiliza las tarjetas de la Home, agrega control de ordenacion por precio y muestra la cantidad de resultados visibles. Incluye un espacio de mapa como referencia visual, ubicado debajo en movil y a la derecha en escritorio.

### Detalle de habitacion (/rooms/[id])
Vista de decision. Presenta galeria navegable de imagenes, informacion principal del alojamiento, datos del anfitrion, servicios y una tarjeta de reserva con contador de huespedes para simular una reserva.

## 2) Componentes principales identificados (referencia Airbnb)

### Home (/)
- HeaderNav: logo, buscador principal, iconos de perfil/menu y acceso a catalogo.
- SearchInput: captura texto y activa filtrado en vivo.
- CategoryTabs: categorias horizontales seleccionables.
- AccommodationGrid: contenedor responsive de tarjetas.
- AccommodationCard: imagen, titulo, precio por noche, rating y enlace interno.
- LoadingState: indicador visual durante carga simulada.

### Catalogo (/catalog)
- CatalogHeader: titulo, conteo de resultados y selector de ordenacion.
- AccommodationGrid: reutilizado para listado.
- AccommodationCard: reutilizado.
- MapPlaceholder: bloque visual con texto "Mapa".

### Detalle (/rooms/[id])
- BackToCatalogLink: accion para volver al catalogo.
- RoomGallery: imagen principal + botones Anterior/Siguiente.
- RoomMainInfo: titulo, rating, numero de resenas y ubicacion.
- HostInfo: avatar placeholder, nombre y experiencia como anfitrion.
- AmenitiesGrid: servicios en grilla.
- ReservationCard: precio, contador de huespedes y CTA de reserva.

## 3) Usuario objetivo
Persona que quiere reservar alojamiento para un viaje corto o de trabajo y busca comparar opciones rapidamente segun ubicacion, precio, calidad y servicios antes de confirmar su reserva.

## Especificacion de componentes de la pantalla adjunta (Home)

### 1. HomePageLayout
- Responsabilidad: orquestar la estructura general de la vista Home en flujo vertical mobile-first.
- Props: sin props.
- Estado local: `searchTerm`, `activeCategory`, `loading`, `rooms`.
- Relacion: compone HeaderNav, CategoryTabs, LoadingState y AccommodationGrid.
- Ubicacion: contenedor raiz de la ruta /.

### 2. HeaderNav
- Responsabilidad: mostrar marca, entrada de busqueda, acciones de usuario y acceso de navegacion al catalogo.
- Props:
  - `searchTerm: string`
  - `onSearchChange: (value: string) => void`
- Estado local: no requerido.
- Relacion: usa SearchInput internamente.
- Ubicacion: parte superior sticky de Home.

### 3. SearchInput
- Responsabilidad: capturar y reflejar texto de busqueda para filtrar tarjetas en tiempo real.
- Props:
  - `value: string`
  - `onChange: (value: string) => void`
  - `placeholder?: string`
- Estado local: no requerido (controlado por HomePageLayout).
- Relacion: hijo de HeaderNav.
- Ubicacion: zona central del navbar.

### 4. CategoryTabs
- Responsabilidad: renderizar categorias de forma horizontal y notificar seleccion activa.
- Props:
  - `categories: string[]`
  - `activeCategory: string`
  - `onCategoryChange: (category: string) => void`
- Estado local: no requerido (controlado por HomePageLayout).
- Relacion: filtra visualmente el listado mostrado en AccommodationGrid.
- Ubicacion: debajo del navbar.

### 5. AccommodationGrid
- Responsabilidad: distribuir tarjetas en una cuadricula responsive.
- Props:
  - `rooms: Accommodation[]`
  - `showLocation?: boolean`
- Estado local: no requerido.
- Relacion: renderiza multiples AccommodationCard.
- Ubicacion: seccion principal de contenido.

### 6. AccommodationCard
- Responsabilidad: mostrar resumen de alojamiento y permitir navegacion con Link.
- Props:
  - `room: Accommodation`
  - `href?: string`
- Estado local: no requerido.
- Relacion: usado en Home y Catalogo.
- Ubicacion: item dentro de AccommodationGrid.

### 7. LoadingState
- Responsabilidad: indicar obtencion de datos simulada antes de pintar tarjetas.
- Props:
  - `label?: string`
- Estado local: no requerido.
- Relacion: alterna con AccommodationGrid segun estado `loading`.
- Ubicacion: area de listado en Home.
