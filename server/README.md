### Diagrama de la base de datos:

```mermaid
---
config:
   layout: elk
   elk:
      nodePlacementStrategy: LINEAR_SEGMENTS
---

erDiagram
   TEACHER {
      int id PK
      string first_name
      string last_name
   }

   COURSE {
      int id PK
      string name
   }

   SECTION {
      int id PK
      string section_number
      int course_id FK
      int teacher_id FK
   }

   STUDENT {
      int id PK
      string national_id
      string first_name
      string last_name
   }

   SECTION_STUDENT {
      int id PK
      int student_id FK
      int section_id FK
   }

   SCHEDULE {
      int id PK
      string day_of_week
      time start_time
      time end_time
      int section_id FK
   }

   ATTENDANCE {
      int id PK
      date date
      string status
      datetime last_updated
      int student_id FK
   }

   COURSE ||--|{ SECTION : "has"
   TEACHER ||--o{ SECTION : "teaches"
   SECTION ||--o{ SECTION_STUDENT : "contains"
   SECTION_STUDENT }o--|| STUDENT : "enrolls"
   SECTION ||--|{ SCHEDULE : "follows"
   STUDENT ||--o{ ATTENDANCE : "has"
```
