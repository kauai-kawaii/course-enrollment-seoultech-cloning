-- from basket.sql
CREATE TABLE `basket` (
    `student_number` varchar(8) NOT NULL,
    `subject_code` varchar(10) NOT NULL,
    `subject_number` varchar(10) NOT NULL,
    `subject_year` varchar(10) NOT NULL,
    `subject_semester` varchar(10) NOT NULL,
    `priority_selection` varchar(45) DEFAULT NULL,
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
        ) REFERENCES `subject_information` (
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
) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_unicode_CI;