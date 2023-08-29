-- Copied and pasted 'major_information.sql'
CREATE TABLE `major_information` (
    `major_code` varchar(10) NOT NULL,
    `major_name` varchar(45) NOT NULL,
    PRIMARY KEY (`major_code`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
-- Insert data into the 'majors' table
INSERT INTO major_information (major_code, major_name)
VALUES ('sgd01', '산업정보시스템전공'),
    ('eng01', '기계시스템디자인공학과');
-- from professor_information.sql
CREATE TABLE professor_information (
    professor_id VARCHAR(10) PRIMARY KEY,
    professor_name VARCHAR(30) NOT NULL,
    professor_room VARCHAR(25),
    professor_lab_phone VARCHAR(15),
    professor_email VARCHAR(45),
    professor_page VARCHAR(100)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
-- from student_information.sql
CREATE TABLE `student_identities` (
    `student_number` VARCHAR(8) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_UNICODE_CI NOT NULL,
    `student_name` VARCHAR(20) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
    `student_status`
    SET('재학', '휴학', '재적') CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL DEFAULT '재학',
        `student_main_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `student_earned_credit` INT NOT NULL,
        `student_class`
    SET('1101', '2101', '3101', '4101') CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `student_applied_credit` INT NOT NULL DEFAULT '0',
        `student_grade_year` INT NOT NULL,
        `student_max_credit` INT NOT NULL,
        `student_major_credit` INT NOT NULL DEFAULT '0',
        `student_phone_number` VARCHAR(12) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `stduent_birthday` DATE NOT NULL,
        `student_sub_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI DEFAULT NULL,
        `student_dual_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI DEFAULT NULL,
        `student_password` VARCHAR(60) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
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
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
CREATE TABLE `student_identities` (
    `student_number` VARCHAR(8) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_UNICODE_CI NOT NULL,
    `student_name` VARCHAR(20) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
    `student_status`
    SET('재학', '휴학', '재적') CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL DEFAULT '재학',
        `student_main_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `student_earned_credit` INT NOT NULL,
        `student_class`
    SET('1101', '2101', '3101', '4101') CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `student_applied_credit` INT NOT NULL DEFAULT 0,
        `student_grade_year` INT NOT NULL,
        `student_max_credit` INT NOT NULL,
        `student_major_credit` INT NOT NULL DEFAULT 0,
        `student_phone_number` VARCHAR(12) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
        `student_birthday` DATE NOT NULL,
        `student_sub_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI DEFAULT NULL,
        `student_dual_major` VARCHAR(10) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI DEFAULT NULL,
        `student_password` VARCHAR(60) CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI NOT NULL,
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
-- from subject.sql
CREATE TABLE `subject_information` (
    `subject_code` VARCHAR(10) NOT NULL,
    `subject_number` VARCHAR(10) NOT NULL,
    `subject_year` VARCHAR(10) NOT NULL,
    `subject_semester` VARCHAR(10) NOT NULL,
    `subject_name` VARCHAR(45) NOT NULL,
    `professor_id` VARCHAR(10) NOT NULL,
    `created_college` VARCHAR(10) NOT NULL,
    `governed_college` VARCHAR(10) NOT NULL,
    `lecture_credit` ENUM('1', '2', '3') NOT NULL,
    `lecture_type`
    SET('교선', '교필', '전선', '전필', '일선', '기필'),
        `lecture_max_personnel` TINYINT,
        `lecture_applied_number` TINYINT,
        `lecture_exclusive` BOOLEAN NOT NULL DEFAULT TRUE,
        `university_exclusive` BOOLEAN NOT NULL DEFAULT TRUE,
        `lecture_building` VARCHAR(30) NOT NULL,
        `lecture_room_number` VARCHAR(6) NOT NULL,
        `others` TEXT,
        `lecture_bound`
    SET('1영역', '2영역', '3영역'),
        `special_course`
    SET('교직', '논문세미나'),
        `dad_of_revenge` BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ),
        FOREIGN KEY (`professor_id`) REFERENCES `professor_information`(`professor_id`),
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- from basket.sql
CREATE TABLE `basket` (
    `student_number` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
    `subject_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
    `subject_number` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
    `subject_year` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
    `subject_semester` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
    `priority_selection` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    PRIMARY KEY (
        `student_number`,
        `subject_code`,
        `subject_number`,
        `subject_year`,
        `subject_semester`
    ),
    KEY `basket_subject_fk_idx` (
        `subject_code`,
        `subject_number`,
        `subject_year`,
        `subject_semester`
    )
    ADD CONSTRAINT `fk_basket_pk` FOREIGN KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ) REFERENCES `new_schema`.`subject_information` (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ) ON DELETE RESTRICT ON UPDATE RESTRICT;
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--from lecture_plan.sql
CREATE TABLE `lecture_plan` (
    `subject_code` VARCHAR(10) NOT NULL,
    `subject_number` VARCHAR(10) NOT NULL,
    `subject_year` VARCHAR(10) NOT NULL,
    `subject_semester` VARCHAR(10) NOT NULL,
    `professor_id` VARCHAR(10) NOT NULL,
    `subject_ko` VARCHAR(20) NOT NULL,
    `subject_eng` VARCHAR(45) NOT NULL,
    PRIMARY KEY (
        `subject_code`,
        `subject_number`,
        `subject_year`,
        `subject_semester`
    ),
    FOREIGN KEY (`professor_id`) REFERENCES `professor_information`(`professor_id`),
    CONSTRAINT `fk_professor_id` FOREIGN KEY (`professor_id`) REFERENCES `professor_information`(`professor_id`),
    CONSTRAINT `fk_primary_key_basket` FOREIGN KEY (
        `subject_code`,
        `subject_number`,
        `subject_year`,
        `subject_semester`
    ) REFERENCES `subject_information`(
        `subject_code`,
        `subject_number`,
        `subject_year`,
        `subject_semester`
    )
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;