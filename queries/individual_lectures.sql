CREATE TABLE `individual_lectures` (
    `subject_code` VARCHAR(10) NOT NULL,
    `subject_number` VARCHAR(10) NOT NULL,
    `subject_year` VARCHAR(10) NOT NULL,
    `subject_semester` VARCHAR(10) NOT NULL,
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
        FOREIGN KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ) REFERENCES `subject_information`(
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ),
        FOREIGN KEY (`student_number`) REFERENCES `student_identities`(`student_number`),
        CONSTRAINT `fk_primary_key_individual_lecture` FOREIGN KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`,
            `student_number`
        ) REFERENCES `subject_information`(
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ),
        `student_identities`(`student_number`)
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;


-- 
--Error Code: 3780. 
--Referencing column 'student_number' and referenced column 'student_number' in foreign key constraint 'individual_lecture_ibfk_2' are incompatible.
