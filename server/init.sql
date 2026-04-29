CREATE TABLE IF NOT EXISTS area (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20) UNIQUE
);

CREATE TABLE IF NOT EXISTS status (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS alumnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    list_index INT
);

CREATE TABLE IF NOT EXISTS profesor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS carrera (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20) UNIQUE,
    area_id INT,
    CONSTRAINT fk_carrera_area FOREIGN KEY (area_id) REFERENCES area(id)
);

CREATE TABLE IF NOT EXISTS asignatura (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(20) UNIQUE,
    semester VARCHAR(20),
    carrera_id INT,
    CONSTRAINT fk_asignatura_carrera FOREIGN KEY (carrera_id) REFERENCES carrera(id)
);

CREATE TABLE IF NOT EXISTS profesor_asignatura (
    id INT PRIMARY KEY AUTO_INCREMENT,
    profesor_id INT,
    asignatura_id INT,
    carga VARCHAR(100),
    CONSTRAINT fk_pa_profesor FOREIGN KEY (profesor_id) REFERENCES profesor(id),
    CONSTRAINT fk_pa_asignatura FOREIGN KEY (asignatura_id) REFERENCES asignatura(id)
);

CREATE TABLE IF NOT EXISTS alumno_asig (
    id INT PRIMARY KEY AUTO_INCREMENT,
    asig_id INT,
    alumno_id INT,
    CONSTRAINT fk_aa_asignatura FOREIGN KEY (asig_id) REFERENCES asignatura(id),
    CONSTRAINT fk_aa_alumno FOREIGN KEY (alumno_id) REFERENCES alumnos(id)
);

CREATE TABLE IF NOT EXISTS asistencia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lapso VARCHAR(50),
    fecha DATE NOT NULL,
    status_id INT,
    asignatura_id INT,
    alumno_id INT,
    CONSTRAINT fk_asist_status FOREIGN KEY (status_id) REFERENCES status(id),
    CONSTRAINT fk_asist_asignatura FOREIGN KEY (asignatura_id) REFERENCES asignatura(id),
    CONSTRAINT fk_asist_alumno FOREIGN KEY (alumno_id) REFERENCES alumnos(id)
);
