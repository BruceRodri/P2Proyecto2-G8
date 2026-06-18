-- Crear la base de datos si no existe
IF NOT EXISTS (
    SELECT name
    FROM sys.databases
    WHERE name = 'MathStats'
)
BEGIN
    CREATE DATABASE MathStats;
END
GO

USE MathStats;
GO

-- Tabla usuarios
CREATE TABLE usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    correo NVARCHAR(100) NOT NULL UNIQUE,
    contraseña NVARCHAR(100) NOT NULL,
    fecha_creacion DATETIME2(7) NULL DEFAULT SYSUTCDATETIME()
);
GO

-- Tabla historial
CREATE TABLE historial (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuarioId INT NOT NULL,
    tipoCalculo NVARCHAR(100) NOT NULL,
    datosIngresados NVARCHAR(MAX) NOT NULL,
    resultado NVARCHAR(MAX) NOT NULL,
    fecha DATETIME2(7) NULL DEFAULT SYSUTCDATETIME(),

    CONSTRAINT FK_historial_usuario
        FOREIGN KEY (usuarioId)
        REFERENCES usuarios(id)
);
GO

-- Verificar tablas
SELECT * FROM usuarios;
SELECT * FROM historial;
