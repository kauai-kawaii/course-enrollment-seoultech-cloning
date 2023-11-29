"use strict";
// 이름, 전화번호, 생년원일을 입력받고 버튼을 누르면 해당 값들이 서버로 전달된다
// 서버는 데이터를 받아서 로직 처리

const studentName = document.querySelector("#studentName");
const studentBirthday = document.querySelector("#studentBirthday");
const studentPhoneNumber = document.querySelector("#studentPhoneNumber");
const findIdBtn = document.querySelector("#findIdBtn");

// findIdBtn.addEventListener("click", findUserId);

// function formatBirthdayInput(input) {
//     const inputValue = input.value;

//     // 입력 값이 6자리 숫자인지 확인
//     if (/^\d{6}$/.test(inputValue)) {
//         // 날짜를 'YYMMDD'에서 'YYYY-MM-DD'로 변환
//         const formattedDate = `19${inputValue.substring(0, 2)}-${inputValue.substring(2, 4)}-${inputValue.substring(4, 6)}`;
//         // 변환된 값을 다시 입력 필드에 설정
//         input.value = formattedDate;
//     } else {
//         alert("올바른 생년월일 형식이 아닙니다. 예: '980905'");
//     }
// }

// 버튼 클릭 이벤트에 함수 연결
findIdBtn.addEventListener("click", findUserId);


function findUserId() {
    const req = {
        studentName: studentName.value,
        studentBirthday: studentBirthday.value,
        studentPhoneNumber: studentPhoneNumber.value
    };

    fetch("/findUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
        // 서버에서 아이디 찾기 성공 시 결과 페이지로 리디렉션
        location.href = '/findId?name=' + res.studentName + '&studentNumber=' + res.studentNumber;     
        // return false;   
    } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("아이디 찾는 중 에러 발생"));
    });
}