# Documentación prueba fullstack: Pokémon TCG

## Tecnologías Utilizadas
- **Node.js** con **Express** como framework para el backend.
- **PostgreSQL** como base de datos.
- **Prisma** como ORM para la manipulación de la base de datos.
- **NextJS** para frontend con **React**
- **Docker** para configurar el desarrollo y despliegue.

## Instalación y Configuración
### Requisitos Previos
- Tener **Docker Engine** instalado. Para sistema Linux es posible instalarlo directamente, para otros sistemas es necesario instalar **Docker Desktop**. (https://docs.docker.com/engine/install/)

### Configuración del Proyecto
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/drosselot/lab_prueba_fullstack.git
   cd LAB_PRUEBA_FULLSTACK
   ```

2. Configurar variables de entorno:

   Crear un archivo `.env` en la raíz del proyecto con una contraseña de la forma (se recomienda cambiar por una personal):
   ```env
   POSTGRES_PASSWORD=PASSWORD
   ```

   Crear un archivo `.env` en la carpeta `/pokemon-tcg` con el siguiente contenido (para hacer deploy es necesario cambiar la url a donde esté deployeada la api):
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:1414"
   ```

   Crear un archivo `.env` en la carpeta `/pokemon-tcg-api` con el siguiente contenido (es necesario cambiar la palabra password por la contraseña elegida anteriormente):
   ```env
    DATABASE_URL="postgresql://ash:password@db:5432/ash?schema=public"
   ```


3. Comenzar el daemon de docker. Si se cuenta con Docker Desktop, es necesario iniciar la aplicación de escritorio e iniciar sesión. En otro caso seguir la documentación: (https://docs.docker.com/engine/daemon/start/)

4. Levantar la aplicación con docker compose desde el root del proyecto (en caso de querer correr en background agregar --detach):
   ```sh
   docker compose up --build
   ```
   * Comentarios para Ubuntu: es necesario correr este comando con sudo. También es necesario detener las instancias de postgres que se puedan estar corriendo en el puerto 5432 con: `sudo systemctl postgresql stop`

La api se encontrará en localhost:1414 y la aplicación web en localhost:1329

## Endpoints de la API

### 1. Listar todos los sets
**GET /sets**
#### Respuesta:
```json
[
  {
    "id": string,
    "name": string,
    "series": string,
    "printed_total": int,
    "total": int,
    "ptcgo_code": string,
    "release_date": string (en formato Date Time String Format),"updated_at": string (en formato Date Time String Format),"symbol_url": string,
    "logo_url": string
  }
  ...
]
```

### 2. Obtener cartas de un set específico
**GET /sets/:id/cards**
#### Parámetros:
- `id` - ID del set
#### Respuesta:
```json
[
  {
    "id": string,
    "name": string,
    "supertype": string,
    "subtypes": string[],
    "types": string[],
    "set_id": string,
    "number": string,
    "rarity": string
  }
]
```

### 3. Obtener información detallada de una carta
**GET /cards/:id**
#### Parámetros:
- `id` - ID de la carta
#### Respuesta:
```json
{
  "id": string,
  "name": string,
  "supertype": string,
  "subtypes": string[],
  "types": string[],
  "set_id": string,
  "number": string,
  "rarity": string,
  "market": [
    {
      "id": string,
      "card_id": string,
      "url": string,
      "updated_at": string (en formato Date Time String Format),
      "market": string
    },
    ...
  ],
  "image": [
    {
      "id": string,
      "card_id": string,
      "url": string,
      "type": string
    },
    ...
  ]
}
```

