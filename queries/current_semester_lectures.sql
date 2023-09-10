CREATE TABLE `current_semester_lectures` (
    `student_number` VARCHAR(8) NOT NULL,
    `subject_code` VARCHAR(10)CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
    `subject_number` VARCHAR(10)CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
    `subject_semester` VARCHAR(10)CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
    `subject_year` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CINOT NULL,
    PRIMARY KEY (`student_number` , `subject_code` , `subject_number` , `subject_year` , `subject_semester`),
    CONSTRAINT `fk_student_number_pk_current_semester_lectures` FOREIGN KEY (`student_number`)
        REFERENCES `student_identities` (`student_number`),
    CONSTRAINT `fk_subject_information_pk_current_semester_lectures` FOREIGN KEY (`subject_code` , `subject_number` , `subject_semester` , `subject_year`)
        REFERENCES `subject_information` (`subject_code` , `subject_number` , `subject_semester` , `subject_year`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
