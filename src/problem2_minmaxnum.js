// 3개의 수에서 제일 큰수, 제일 작은 수 찾기
// 입력은 prompt()
// prompt()로 입력 받은 값은 문자열로 반환 되므로 Number()로 형변환 필요
// 화면 출력은 document.write()를 사용하면 되고, 출력문 내부에 html 사용 가능

let num1 = Number(prompt("정수1 입력", ""));
let num2 = Number(prompt("정수2 입력", ""));
let num3 = Number(prompt("정수3 입력", ""));

let minNum;
let maxNum;

if(num1 > num2) {
    if(num1>num3){
        maxNum = num1;
        num2 > num3 ? minNum = num3 : minNum = num2;
    }else {
        maxNum = num3;
        minNum = num2;
    }
}else {
    if(num2 > num3){
        maxNum = num2;
        num1 > num3 ? minNum = num3 : minNum = num1;
    }else {
        maxNum = num3;
        minNum = num1;
    }
}

document.write("<h3>제일 큰 수 : " + maxNum + "</h3> <h3>제일 작은 수 : " + minNum+"</h3>");


// minmax(num1,num2,num3);

// function minmax(num1,num2,num3) {
//     maxNum = Math.max(num1,num2,num3);
//     minNum = Math.min(num1,num2,num3);

//     document.write("제일 큰 수 : " + maxNum + "<br> 제일 작은 수 : " + minNum);
// };