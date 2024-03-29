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