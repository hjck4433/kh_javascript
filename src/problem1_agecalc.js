const currentYear = 2023;
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력 하세요 : (YYYY)", "");
age = currentYear - birthYear;
document.write("<p>"+currentYear + "년 현재</p>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");

