# 📦 Sistema de Inventario – Full Stack

Sistema de Inventario desarrollado con arquitectura **Frontend + Backend desacoplada**, utilizando **React** para el frontend y **.NET 8** con **microservicios** para el backend.

Incluye los módulos:
- Login (Autenticación)
- Productos
- Transacciones de Inventario

El sistema utiliza **Authorization Bearer (JWT)** para la seguridad de los endpoints.

---

## ✅ Requisitos

### Software necesario
- **Git**
- **Node.js** (versión LTS recomendada)
- **NPM**
- **.NET SDK 8**
- **SQL Server 2019 o posterior** (local o Docker)
- (Opcional) **SQL Server Management Studio (SSMS)**

---

## 🗄 Base de Datos

En la raíz del proyecto se incluye la carpeta "02-scripts" el archivo:

```
01-script.sql
```

tambien se incluye un Backup, **se recomienda hacer el restore del Backup adjuntado**

InventarioBGR.bak

(Este Backup esta listo con los datos de las tablas para las respectivas pruebas)

Antes de ejecutar el backend, se debe ejecutar este script en SQL Server.

El Backup contiene:
- Creación de la base de datos
- Creación de las tablas necesarias para el sistema
- Datos de las 3 tablas, para un testeo

Antes de ejecutar el backend, se debe ejecutar este script en SQL Server.

---

## ⚙ Ejecución del Backend

El backend está compuesto por **3 microservicios**:

- **Auth** (Autenticación)
- **Productos**
- **Transacciones**

### 1️⃣ Configurar la cadena de conexión
En cada microservicio, configurar el archivo `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=InventarioBGR;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

### 2️⃣ Restaurar dependencias y ejecutar
Para cada microservicio:

```bash
dotnet restore
dotnet build
dotnet run
```

### 3️⃣ Seguridad
- El login devuelve un **JWT**
- El frontend envía el token en cada request mediante el header:

```
Authorization: Bearer {token}
```

- Los endpoints protegidos requieren autenticación válida

### 4️⃣ Swagger
Cada microservicio expone Swagger para pruebas y documentación de los endpoints.

---

## 🖥 Ejecución del Frontend

### 1️⃣ Configurar variables de entorno
En el frontend crear un archivo `.env`:

```env
VITE_APIPRODUCT_URL=<URL_API_PRODUCTOS>
VITE_APITRANSACCION_URL=<URL_API_TRANSACCIONES>
VITE_APIAUTH_URL=<URL_API_AUTH>
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar aplicación
```bash
npm run dev
```

La aplicación se ejecutará en modo desarrollo y permitirá:
- Iniciar sesión
- Acceder a módulos protegidos
- Gestionar productos
- Registrar y consultar transacciones

---

## 🔐 Autenticación y Autorización

- Autenticación basada en **JWT**
- Uso de **Authorization Bearer**
- Protección de rutas en frontend
- Validación de token en backend
- Manejo de errores 401 para sesiones inválidas

---

## 🧩 Funcionalidades Principales

### Login
- Inicio de sesión con correo y contraseña
- Obtención de token JWT

### Productos
- Crear productos
- Editar productos
- Listar productos
- Control de stock
- Manejo de categorías

### Transacciones
- Registro de transacciones (COMPRA / VENTA)
- Actualización automática de stock
- Validaciones de negocio
- Filtros por producto, tipo y fecha
- Ordenamiento por fecha descendente

---

