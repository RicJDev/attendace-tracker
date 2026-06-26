INSERT INTO TEACHER (first_name, last_name) VALUES ('Juan', 'Pérez');

INSERT INTO COURSE (name) VALUES 
('Programación II'),
('Programación III'),
('Base de Datos');

INSERT INTO SECTION (section_number, course_id, teacher_id) VALUES 
('A', 1, 1),
('A', 2, 1),
('A', 3, 1);

INSERT INTO STUDENT (first_name, last_name, national_id, list_number) VALUES 
('Carlos', 'García',  'V-11111111', 1),
('María',  'López',   'V-22222222', 2),
('Ana',    'Martínez','V-33333333', 3);

INSERT INTO SECTION_STUDENT (student_id, section_id) VALUES 
(1, 1), (1, 3), (2, 1), (2, 2), (2, 3), (3, 2), (3, 3);         

INSERT INTO SCHEDULE (day_of_week, start_time, end_time, section_id) VALUES 
('Lunes',     '08:00:00', '10:00:00', 1),
('Miércoles', '10:00:00', '12:00:00', 2),
('Viernes',   '14:00:00', '16:00:00', 3);

INSERT INTO ATTENDANCE (date, status, last_updated, student_id) VALUES 
('2026-06-22', 'Presente', '2026-06-22 09:00:00', 1),
('2026-06-23', 'Ausente',  '2026-06-23 09:00:00', 1),
('2026-06-24', 'Tarde',    '2026-06-24 10:05:00', 1),
('2026-06-22', 'Presente', '2026-06-22 09:00:00', 2),
('2026-06-22', 'Presente', '2026-06-22 09:00:00', 3);