const firstDiv = document.getElementById("first"); // 개인별 시간표 화면 id
const secondDiv = document.getElementById("second"); // 장바구니 신청내역 화면 id
const personalScheduleRadio = document.getElementById("personalSchedule"); // 개인별 시간표 버튼 id
const cartHistoryRadio = document.getElementById("cartHistory"); // 장바구니 신청내역 버튼 id

const year = document.getElementById("year"); // 입력한 년도
const semester = document.getElementById("semester"); // 선택한 학기
const dates = document.getElementById("dates"); // 년도/학기 표기하는 p tag id
const button = document.getElementById("button"); // 조회 버튼

// 개인별 시간표 버튼 누르면 개인별 시간표 화면 보여줌
personalScheduleRadio.addEventListener("change", () => {
   firstDiv.style.display = "block";
   secondDiv.style.display = "none";
});

// 장바구니 신청내역 버튼 누르면 장바구니 신청내역 화면 보여줌
cartHistoryRadio.addEventListener("change", () => {
   firstDiv.style.display = "none";
   secondDiv.style.display = "block";
});

// 조회 버튼을 누르면 조회하고자 하는 년도, 학기를 보여줌
button.addEventListener("click", () => {
   const yearValue = inputYear.value; // 입력한 년도의 텍스트
   const semesterValue = semester.value; // 선택한 학기의 값
   dates.textContent = `${yearValue}/${semesterValue} 개인별 시간표`;
});
