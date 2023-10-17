// 1. 성적을 입력 받아 학점 출력하기
// - 0 ~ 100점 사이가 아니면 입력 오류 출력
// - 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리

let score = Number(prompt("성적 입력 :"));
let color;
let rst;

if (score>100 || score < 0) {
    document.write("성적을 잘 못 입력하셨습니다.");
}else {
    switch(true) {
        case (score >= 90):
            rst = "A";
            color = "gold";
            break;
        case (score >= 80):
            rst = "B";
            color = "royalblue";
            break;
        case (score >= 70):
            rst = "C";
            color="yellow";
            break;
        case (score >= 60):
            rst="D";
            color="violet"
            break;
        case (score < 60):
            rst="F";
            color = "red";
            break;
    }
    document.write(`<div><h2>당신의 학점</h2><p class='score'> ${rst} </p></div>`);
    document.querySelector('.score').style.backgroundColor= color;
}
