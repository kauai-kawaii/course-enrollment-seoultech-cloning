CREATE TABLE professor_information (
    professor_id VARCHAR(10) PRIMARY KEY,
    professor_name VARCHAR(30) NOT NULL,
    professor_room VARCHAR(25),
    professor_lab_phone VARCHAR(15),
    professor_email VARCHAR(45),
    professor_page VARCHAR(100)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;