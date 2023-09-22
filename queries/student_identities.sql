CREATE TABLE `student_identities` (
    `student_number` VARCHAR(8) NOT NULL,
    `student_name` VARCHAR(20) NOT NULL,
    `student_status`
    SET('재학', '휴학', '재적') NOT NULL DEFAULT '재학',
        `student_main_major` VARCHAR(10) NOT NULL,
        `student_earned_credit` INT NOT NULL,
        `student_class`
    SET('1101', '2101', '3101', '4101') NOT NULL,
        `student_applied_credit` INT NOT NULL DEFAULT 0,
        `student_grade_year` INT NOT NULL,
        `student_max_credit` INT NOT NULL,
        `student_major_credit` INT NOT NULL DEFAULT 0,
        `student_phone_number` VARCHAR(12) NOT NULL,
        `student_birthday` DATE NOT NULL,
        `student_sub_major` VARCHAR(10) DEFAULT NULL,
        `student_dual_major` VARCHAR(10) DEFAULT NULL,
        `student_password` VARCHAR(60) NOT NULL,
        PRIMARY KEY (`student_number`),
        KEY `student_majors_idx` (
            `student_main_major`,
            `student_sub_major`,
            `student_dual_major`
        ),
        CONSTRAINT `fk_student_dual_major` FOREIGN KEY (`student_dual_major`) REFERENCES `major_information` (`major_code`),
        CONSTRAINT `fk_student_main_major` FOREIGN KEY (`student_main_major`) REFERENCES `major_information` (`major_code`),
        CONSTRAINT `fk_student_sub_major` FOREIGN KEY (`student_sub_major`) REFERENCES `major_information` (`major_code`)
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;