INSERT INTO ACADEMIC_PERIOD (name, start_date, end_date) VALUES 
('2026-I', '2026-03-01 00:00:00', '2026-07-31 00:00:00');

INSERT INTO TEACHER (first_name, last_name) VALUES 
('Juan', 'Pérez');

INSERT INTO COURSE (name) VALUES 
('Programación II'),
('Programación III'),
('Base de Datos');

INSERT INTO SECTION (section_number, course_id, teacher_id, period_id) VALUES 
('A', 1, 1, 1),
('A', 2, 1, 1),
('A', 3, 1, 1);

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

INSERT INTO ATTENDANCE (date, status, last_updated, section_student_id, schedule_id) VALUES 
('2026-06-22 00:00:00', 'Presente', '2026-06-22 09:00:00', 1, 1), 
('2026-06-22 00:00:00', 'Tarde',    '2026-06-22 09:15:00', 3, 1), 
('2026-06-24 00:00:00', 'Presente', '2026-06-24 10:00:00', 4, 2), 
('2026-06-24 00:00:00', 'Ausente',  '2026-06-24 10:00:00', 6, 2), 
('2026-06-26 00:00:00', 'Presente', '2026-06-26 14:05:00', 2, 3); 