CREATE TABLE `major_information` (
    `major_code` varchar(10) NOT NULL,
    `major_name` varchar(45) NOT NULL,
    PRIMARY KEY (`major_code`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- Insert data into the 'majors' table
INSERT INTO major_information (major_code, major_name)
VALUES ('sgd01', '산업정보시스템전공'),
    ('eng01', '기계시스템디자인공학과');