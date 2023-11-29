// userIdView 페이지의 JavaScript 코드
"use strict";

// 쿼리 매개변수에서 결과 데이터를 가져옴
const urlParams = new URLSearchParams(window.location.search);
const studentName = urlParams.get('name');
const studentNumber = urlParams.get('studentNumber');

// 결과 데이터를 페이지에 표시
document.querySelector("#findIdName").textContent = studentName;
document.querySelector("#findIdNumber").textContent = studentNumber;
