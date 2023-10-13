# TOOD-LIST Fi-Group
Aplicacion de Todo List,

React/Typescript,  Stateless components, Ant Desing, para el backend, .net 7 con entity framework y SQL Server.


## Prerequisitos

-Visual Studio Code https://code.visualstudio.com/download
-C# for Visual Studio Code (latest version) https://marketplace.visualstudio.com/items?-itemName=ms-dotnettools.csharp
.NET 7.0 SDK https://dotnet.microsoft.com/download/dotnet/7.0
-SQL Server(Express, onPremise, Azure -> https://learn.microsoft.com/en-us/azure/azure-sql/database/scripts/create-and-configure-database-cli?view=azuresql)

-nodejs y npm para el  frontend https://nodejs.org/en/download





## Iniciar Backend

1. Crear una Base de datos SQL con nombre , puede ser local, Azure, O en cualquier SQL server con acceso, 
2. Obtener el querystring 
3. Actualizar en el Archivo: /todo-listo-figroup/backend/TodoApi/appsettings.Development.json y el parametro
      "AZURE_SQL_CONNECTIONSTRING" con el querystring de conexion de la base de datos.
4 Ejecutar la migración inicial con el commando: "dotnet ef migrations add InitialCreate".
5.Ejecutar el comando:  "dotnet ef database update"
6.Ejecutar el comando  "dotnet build"
7.Ejecutar el comando "dotnet run"
8.Verificar la ejecucion en el siguiente URL: "https://localhost:7191/swagger/index.html"


## Iniciar Front End

1. En la carpeta frontend del proyecto ejecutar el comando: "npm install".
2. Verificar que la ruta del backend sea la correcta, actualizar segun sea necesario en el archivo con la ruta : "frontend/todo-list-fi/src/Services/htttp-common.ts"
3. Ejecutar el comando npm run build
4. Ejecutar el comando npm start.\
5. Abrir la siguiente url:.[http://localhost:3000](http://localhost:3000) 



