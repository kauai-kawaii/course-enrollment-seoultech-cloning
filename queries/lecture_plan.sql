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
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;