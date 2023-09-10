CREATE TABLE `student_identities` (
    `student_number` varchar(8) NOT NULL,
    `student_name` varchar(20) NOT NULL,
    `student_status`
    set('재학', '휴학', '재적') NOT NULL DEFAULT '재학',
        `student_main_major` varchar(10) NOT NULL,
        `student_earned_credit` int NOT NULL,
        `student_class`
    set('1101', '2101', '3101', '4101') NOT NULL,
        `student_applied_credit` int NOT NULL DEFAULT '0',
        `student_grade_year` int NOT NULL,
        `student_max_credit` int NOT NULL,
        `student_major_credit` int NOT NULL DEFAULT '0',
        `student_phone_number` varchar(12) NOT NULL,
        `stduent_birthday` date NOT NULL,
        `student_sub_major` varchar(10) DEFAULT NULL,
        `student_dual_major` varchar(10) DEFAULT NULL,
        `student_password` varchar(60) NOT NULL,
        PRIMARY KEY (`student_number`),
        KEY `subject_main_major_idx` (
            `student_main_major`,
            `student_sub_major`,
            `student_dual_major`
        ),
        KEY `student_main_major_idx` (
            `student_main_major`,
            `student_sub_major`,
            `student_dual_major`
        ),
        KEY `student_majors_idx` (
            `student_main_major`,
            `student_sub_major`,
            `student_dual_major`
        ),
        KEY `stduent_credits_idx` (
            `student_earned_credit`,
            `student_applied_credit`,
            `student_max_credit`,
            `student_major_credit`
        ),
        KEY `fk_student_sub_major_idx` (`student_sub_major`),
        KEY `fk_student_dual_major_idx` (`student_dual_major`),
        CONSTRAINT `fk_student_dual_major` FOREIGN KEY (`student_dual_major`) REFERENCES `major_information` (`major_code`),
        CONSTRAINT `fk_student_main_major` FOREIGN KEY (`student_main_major`) REFERENCES `major_information` (`major_code`),
        CONSTRAINT `fk_student_sub_major` FOREIGN KEY (`student_sub_major`) REFERENCES `major_information` (`major_code`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;