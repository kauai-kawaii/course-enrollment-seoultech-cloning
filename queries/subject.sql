CREATE TABLE `subject` (
    `subject_code` varchar(10) NOT NULL,
    `subject_number` varchar(10) NOT NULL,
    `subject_year` year NOT NULL,
    `subject_semester` varchar(10) NOT NULL,
    `subject_name` varchar(45) NOT NULL,
    `created_college` varchar(10) NOT NULL,
    `governed_college` varchar(10) NOT NULL,
    `professor_id` varchar(10) NOT NULL,
    `lecture_credit` enum('1', '2', '3') NOT NULL,
    `lecture_type`
    set('교필', '교선', '전선', '전필', '일선', '기필') NOT NULL,
        `lecture_max_personnel` tinyint NOT NULL,
        `lecture_applied_number` tinyint NOT NULL,
        `lecture_exclusive` tinyint NOT NULL,
        `university_exclusive` tinyint NOT NULL,
        `lecture_building` varchar(30) NOT NULL,
        `lecture_room_number` varchar(6) NOT NULL,
        `others` varchar(45) DEFAULT NULL,
        `lecture_bound`
    set('제1영역', '제2영역', '제3영역', '제4영역', '제5영역') DEFAULT NULL,
        `special_course` varchar(45) DEFAULT NULL,
        `dad_of_revenge` tinyint DEFAULT NULL,
        PRIMARY KEY (
            `subject_code`,
            `subject_number`,
            `subject_year`,
            `subject_semester`
        ),
        KEY `FK_professor_id_idx` (`professor_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;