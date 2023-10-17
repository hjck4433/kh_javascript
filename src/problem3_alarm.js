// 시간 정보(시간과 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력 하기 `${}`
// parseInt()함수 필요 : 결과값을 정수로 반환
// 1. promt를 사용해서 시간, 분 입력 받기
// 2. 입력 받은 시간을 분으로 환산해서 45분을 빽
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간 만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력시 템플릿 문자열 사용

let h = Number(prompt("시간 입력 : "));
let m = Number(prompt("분 입력 :"));

let time = h*60+m-45;
// if (time<0) {
//     h = 23;
//     m = 60 - m;
// }else {
//     h = parseInt(time/60);
//     m = time % 60;
// }
if (time<45) time = (24*60) + m;
time -= 45;
h = parseInt(time / 60);
m = time % 60;

document.write(`<h2>알람 : ${h}시 ${m}분</h2>`);


