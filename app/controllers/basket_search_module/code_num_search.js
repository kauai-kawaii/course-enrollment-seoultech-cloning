var app = require("../../app");
var SubjectInformation = require("../../model/subjectInformation");

app.post("/basket", async (req, res) => {
  console.log(`[LOG] student_number : ${student_number}`);
  const basket = await subject.findAll({
    attributes: [
      "subject_id",
      "sujbect_number",
      "subject_code",
      "subject_name",
      "professor_id",
      "governed_college",
      "created_college",
      "day",
      "lecture_building",
      "lecture_classroom",
    ],
    where: [subject_id.contains(req)],
    include: [
      {
        model: SubjectInformation,
        attributes: ["subject_number", "subject_code"],
        //through: { attributes: [] }, // 중간 테이블의 추가 속성을 포함하지 않도록 설정
      },
    ],
  });

  console.log(basket);
  res.send(basket);
});
