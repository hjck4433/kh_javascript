// 함수 선언문 : function 키워드로 생성, 호이스팅에 영향 받음, 호출해야 실행 됨
// console.log(sum(10 ,20));
// console.log(sum(100, 200));

function sum(p1, p2) {
    return test + p1 + p2;
}

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 되지 않음, 네이밍함수와 익명의 함수로 만들 수 있음
const gugudan = function(dan) {
    for(let i = 1; i < 10; i++) {
        console.log(`${dan}*${i} = ${dan*i}`);
    }
}
// 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨
const gugudan2 = (dan) => {
    for(let i = 1; i < 10; i++) {
        console.log(`${dan}*${i} = ${dan*i}`);
    }
}

// gugudan(5);
// gugudan2(9);

// const fullgugu = function(){
//     for(let i = 1; i <10; i++) {
//         gugudan(i);
//     }
// };
// fullgugu();

const sum2 = (num1, num2) => {
    console.log(num1, num2);
    return num1 + num2;
}
// 자바스크립트에서는 매개변수의 수만큼 인수를 전달하지 않아도 오류 발생하지 않음
// sum2(10);

// 기본값할당
const sum3 = (num1, num2 = 100) => {
    console.log(num1, num2);
    return num1 + num2;
}
// console.log(sum3(10));

const sum4 = (num1, num2 = 100) => num1 + num2;

// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
let a = 10; // 전역스코프
function sum5() {
    let a = 20; // 지역스코프이자 블록 소코프
    console.log(`함수 내부 : ${a}`);
}
// sum5();
// console.log(`함수 외부 : ${a}`);

// let b = 10;
// {
//     let c = 20;
//     console.log(`코드 내부 블록 b : ${b}`);
//     console.log(`코드 내부 블록 c : ${c}`);
// }
// console.log(`코드 외부 블록 b : ${b}`);
// console.log(`코드 외부 블록 c : ${c}`);

// 참조 우선순위
let d = 10;
const e = 20;
function sum6() {
    let d = 50;
    const e = 70;
    console.log(`함수 내부 d : ${d}`);
    console.log(`함수 내부 e : ${e}`);
}
// sum6();
// console.log(`함수 외부 d : ${d}`);
// console.log(`함수 외부 e : ${e}`);

let f = 10;
let g = 20;
{
    let f = 30;
    let g = 40;
    // console.log(`함수 내부 f : ${f}`);
    // console.log(`함수 내부 g : ${g}`);
}
// console.log(`함수 외부 f : ${f}`);
// console.log(`함수 외부 g : ${g}`);

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수

(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행 합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "03030";

    for(let i =0; i < 100; i++) {
        console.log(i);
    }
}

