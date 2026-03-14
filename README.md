# 🏨 Hospedate – Frontend

Interfaz web del sistema **Hospedate**, desarrollada para interactuar con el backend construido en **Java + Spring Boot**.  
El frontend permite a los usuarios consultar habitaciones, realizar reservas y administrar su información, mientras que los administradores pueden gestionar habitaciones, servicios y reservas del hotel.

---

# 🚀 Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Bootstrap 5**
- **SweetAlert2**
- **Fetch API** para comunicación con el backend
- Integración con **API REST Spring Boot**

---

# ✨ Funcionalidades principales

## 🌐 Acceso público (sin autenticación)

Un usuario que no ha iniciado sesión puede:

- Ver la **página principal**
- Consultar **habitaciones disponibles**
- Ver la sección **Quiénes somos**
- **Registrarse**
- **Iniciar sesión**

---

# 👤 Funcionalidades del Usuario

Una vez autenticado, el usuario puede:

- 🛏 **Reservar habitaciones**
- ⭐ **Agregar habitaciones a favoritos**
- ✏ **Modificar reservas**
- ❌ **Cancelar reservas**
- 📜 Ver **historial de reservas**
- 🔎 Filtrar reservas por estado:
  - Activas
  - Canceladas
  - Finalizadas
- 👤 **Editar perfil**
  - cambiar información personal
  - agregar o actualizar foto de perfil

---

# 🛠 Funcionalidades del Administrador

El rol administrador tiene acceso a herramientas de gestión del hotel:

### Gestión de habitaciones
- Crear habitaciones
- Editar habitaciones
- Eliminar habitaciones

### Gestión de reservas
- Ver **todas las reservas del sistema**
- Filtrar reservas por estado:
  - Pendientes
  - Canceladas
  - Finalizadas
  - Confirmadas
- Filtrar reservas por **fechas**

### Gestión de servicios
- Crear servicios adicionales
- Modificar servicios
- Eliminar servicios

---

# 🔗 Conexión con el Backend

El frontend consume los **endpoints REST del backend desarrollado en Spring Boot** utilizando `Fetch API`.

Ejemplo de conexión:

```javascript
fetch("http://localhost:8080/api/habitaciones")
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
