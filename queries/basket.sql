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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;