# La Sazón de Lola

Landing page para restaurante de comida criolla cubana. Menú digital interactivo con pedidos por WhatsApp, reserva de mesa, y diseño cálido estilo caribeño.

## Stack

- **React 19** + TypeScript
- **Vite** + Tailwind CSS 4
- **React Router** para navegación SPA
- **Lucide React** para iconografía

## Rutas

| Ruta | Contenido |
|------|-----------|
| `/` | Inicio (hero + menú + historia + ubicación) |
| `/menu` | Menú digital |
| `/historia` | Historia del restaurante |
| `/ubicacion` | Mapa y contacto |
| `*` | Página 404 |

## Funcionalidades

- Menú digital con tabs por categoría (Entradas, Platos Fuertes, Postres, Bebidas)
- Filtros por tipo de plato (Sin Gluten, Vegetariano, Especial de la Casa)
- Carrito de pedidos con localStorage — arma tu pedido y envíalo por WhatsApp
- Reserva de mesa con selector de fecha, hora, personas y zona
- Modal de detalle de plato con ingredientes, tiempo de preparación y notas de la abuela
- Mapa y ubicación con botón de copiar dirección
- Totalmente responsive — mobile-first

## Desarrollo

```bash
# Instalar dependencias
bun install

# Modo desarrollo
bun dev

# Build producción
bun run build
```

## Licencia

© 2026 Bit & Byte Studio. Proyecto demo para portafolio.
