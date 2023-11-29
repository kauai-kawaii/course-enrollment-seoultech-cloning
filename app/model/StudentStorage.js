"use strict";

const studentData = require("./database/studentIdentities");

class StudentStorage {
    static async getStudentInfo(studentName) {
        try {
          const student = await studentData.findOne({ where: { student_name: studentName } });
          if (student) {
            const studentInfo = student.toJSON();
            console.log(studentInfo);
            return studentInfo;
          } else {
            console.log('해당하는 학생 정보를 찾을 수 없습니다.');
            return null;
          }
        } catch (error) {
          console.error('학생 정보 조회 오류:', error);
          throw new Error('학생 정보 조회 중 오류가 발생했습니다.');
        }
      }
}
module.exports = StudentStorage;