/*
  Warnings:

  - You are about to drop the column `student_id` on the `ATTENDANCE` table. All the data in the column will be lost.
  - Added the required column `schedule_id` to the `ATTENDANCE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section_student_id` to the `ATTENDANCE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period_id` to the `SECTION` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ACADEMIC_PERIOD" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ATTENDANCE" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "last_updated" DATETIME NOT NULL,
    "section_student_id" INTEGER NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    CONSTRAINT "ATTENDANCE_section_student_id_fkey" FOREIGN KEY ("section_student_id") REFERENCES "SECTION_STUDENT" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ATTENDANCE_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "SCHEDULE" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ATTENDANCE" ("date", "id", "last_updated", "status") SELECT "date", "id", "last_updated", "status" FROM "ATTENDANCE";
DROP TABLE "ATTENDANCE";
ALTER TABLE "new_ATTENDANCE" RENAME TO "ATTENDANCE";
CREATE TABLE "new_SECTION" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "section_number" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "period_id" INTEGER NOT NULL,
    CONSTRAINT "SECTION_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "COURSE" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SECTION_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "TEACHER" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SECTION_period_id_fkey" FOREIGN KEY ("period_id") REFERENCES "ACADEMIC_PERIOD" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SECTION" ("course_id", "id", "section_number", "teacher_id") SELECT "course_id", "id", "section_number", "teacher_id" FROM "SECTION";
DROP TABLE "SECTION";
ALTER TABLE "new_SECTION" RENAME TO "SECTION";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
