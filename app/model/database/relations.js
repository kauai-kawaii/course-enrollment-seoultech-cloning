// // relations.js

const ProfessorInformation = require('./professorInformation');
const SubjectInformation = require('./subjectInformation');
const LecturePlan = require('./lecturePlan');
const Basket = require('./basket');
const IndividualLectures = require('./individualLecture');
const LectureTime = require('./lectureTime');
const MajorInformation = require('./majorInformation');
const StudentIdentities = require('./studentIdentities');

// ProfessorInformation 모델과 SubjectInformation 모델 간의 1:N 관계 설정
ProfessorInformation.hasMany(SubjectInformation, {
  foreignKey: 'professor_id',
  sourceKey: 'professor_id',
});

// ProfessorInformation 모델과 LecturePlan 모델 간의 1:N 관계 설정
ProfessorInformation.hasMany(LecturePlan, {
  foreignKey: 'professor_id',
  sourceKey: 'professor_id',
});

// 강의계획서, 교과목 정보 1:1 관계 설정
LecturePlan.belongsTo(SubjectInformation, {
  foreignKey: 'subject_code',
  sourceKey: 'subject_code'
})

LecturePlan.belongsTo(SubjectInformation, {
  foreignKey: 'subject_number',
  sourceKey: 'subject_number'
})
LecturePlan.belongsTo(SubjectInformation, {
  foreignKey: 'subject_year',
  sourceKey: 'subject_year'
})
LecturePlan.belongsTo(SubjectInformation, {
  foreignKey: 'subject_semester',
  sourceKey: 'subject_semester'
})

// 학생, 전공 정보 (주전공) 관계 설정
StudentIdentities.belongsTo(MajorInformation, {
  foreignKey : 'student_main_major',
  sourceKey : 'major_code',
})

// 학생, 전공 정보 (복수전공) 관계 설정
StudentIdentities.belongsTo(MajorInformation, {
  foreignKey : 'student_dual_major',
  sourceKey : 'major_code',
})

// 학생, 전공 정보 (부전공) 관계 설정
StudentIdentities.belongsTo(MajorInformation, {
  foreignKey : 'student_sub_major',
  sourceKey : 'major_code',
})

// 학생 1명당 장바구니 1개
StudentIdentities.hasOne(Basket, {
  foreignKey : 'student_number',
  sourceKey : 'student_number',
})

// 장바구니,교과목 N:M
// Basket.hasMany(SubjectInformation, {
//   foreignKey: 'subject_code',
//   sourceKey: 'subject_code',
//   as: 'SubjectInfo' // 연결된 정보에 별칭 부여
// });

// Basket.hasMany(SubjectInformation, {
//   foreignKey: 'subject_number',
//   sourceKey: 'subject_number',
// });

// Basket.hasMany(SubjectInformation, {
//   foreignKey: 'subject_year',
//   sourceKey: 'subject_year',
// });

// Basket.hasMany(SubjectInformation, {
//   foreignKey: 'subject_semester',
//   sourceKey: 'subject_semester',
// });

Basket.belongsToMany(SubjectInformation, { through: 'BasketSubject', as: 'BasketSubjects' });
SubjectInformation.belongsToMany(Basket, { through: 'BasketSubject', as: 'BasketSubjects' });


// 강의정보, 강의시간 1:1


module.exports = {
  ProfessorInformation,
  SubjectInformation,
  LecturePlan,
  Basket,
  IndividualLectures,
  LectureTime,
  MajorInformation,
  StudentIdentities,
};

