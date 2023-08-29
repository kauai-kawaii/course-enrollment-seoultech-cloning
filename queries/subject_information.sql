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
ADD CONSTRAINT `fk_professor_id` FOREIGN KEY (`professor_id`) REFERENCES `new_schema`.`professor_information` (`professor_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    ADD CONSTRAINT `fk_created_college` FOREIGN KEY (`created_college`) REFERENCES `new_schema`.`major_information` (`major_code`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_governed_college` FOREIGN KEY (`governed_college`) REFERENCES `new_schema`.`major_information` (`major_code`) ON DELETE NO ACTION ON UPDATE NO ACTION;