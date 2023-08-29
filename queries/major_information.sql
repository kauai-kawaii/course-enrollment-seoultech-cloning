CREATE TABLE `major_information` (
    `major_code` varchar(10) NOT NULL,
    `major_name` varchar(45) NOT NULL,
    PRIMARY KEY (`major_code`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
ALTER TABLE `new_schema`.`basket`
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