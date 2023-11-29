"use strict";

const StudentStorage = require("./StudentStorage");

class Student {
    constructor(body) {
        this.body = body;
    }
    async find() {
        const body = this.body;
        const { student_name, student_birthday, student_phone_number, student_number } = await StudentStorage.getStudentInfo(body.studentName);
        if (student_name === body.studentName && student_birthday === body.studentBirthday && student_phone_number === body.studentPhoneNumber) {
            return { success: true, studentNumber: student_number, studentName: student_name};
        }
        return { success: false, msg: "회원 정보를 다시 입력해주세요." };
    }
}
module.exports = Student;
