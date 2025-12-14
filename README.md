# Bicicletería - Página Web

Este proyecto es una aplicación web desarrollada con **React + Vite** que simula el funcionamiento de una bicicletería online. La página permite a los usuarios navegar entre distintas secciones, visualizar productos, agregar artículos al carrito y realizar un flujo de compra básico. Además, incluye un sistema de autenticación y un panel de administración para gestionar productos.

## 🚀 Funcionalidades principales

- **Inicio**: Página de bienvenida con información general.
- **Servicios**: Sección que describe los servicios ofrecidos por la bicicletería (mantenimiento, reparaciones, accesorios).
- **Productos**: Listado de bicicletas y accesorios disponibles.  
  - Cada producto puede visualizarse en detalle.  
  - Los usuarios pueden agregar productos al carrito.
- **Carrito y Pago**: Sección protegida donde el usuario puede revisar su carrito y simular el proceso de pago.
- **Autenticación**:  
  - Inicio de sesión para clientes.  
  - Cierre de sesión con limpieza automática del carrito.
- **Dashboard (solo admin)**: Panel protegido para administración de productos.  
  - Agregar nuevos productos.  
  - Editar o eliminar productos existentes.
- **Notificaciones**: Integración con **React Toastify** para mostrar mensajes de confirmación y alertas.
- **Estilos y UI**: Uso de **Bootstrap** y **styled-components** para un diseño moderno y responsivo.

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) para la navegación
- [Bootstrap](https://getbootstrap.com/) y [styled-components](https://styled-components.com/) para estilos
- [React Toastify](https://fkhadra.github.io/react-toastify/) para notificaciones
- Context API para manejar **autenticación**, **carrito** y **productos**

## 🔒 Rutas protegidas

- `/pagar`: accesible solo para usuarios autenticados.
- `/dashboard`: accesible solo para administradores.
- `/formulario-producto` y `/eliminar-producto`: accesibles solo para administradores.

## 📦 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/bicicleteria.git
