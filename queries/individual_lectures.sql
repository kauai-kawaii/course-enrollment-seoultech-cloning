CREATE TABLE `individual_lecture` (
    `subject_code` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `subject_number` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `subject_year` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `subject_semester` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `student_number` VARCHAR(8) NOT NULL,
    `student_score`
    SET(
            'A+',
            'A0',
            'B+',
            'B0',
            'C+',
            'C0',
            'D+',
            'D0',
            'F'
        ) DEFAULT NULL,
        `luck_river_count` INT DEFAULT NULL,
        PRIMARY KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`,
            `student_number`
        ),
        CONSTRAINT `fk_primary_key_individual_lecture` FOREIGN KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ) REFERENCES `subject_information` (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ),
        CONSTRAINT `fk_student_number_pk_individual_lecture` FOREIGN KEY (`student_number`) REFERENCES `student_identities` (`student_number`)
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;