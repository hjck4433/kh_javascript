// 자바스크립트 한 줄 주석
/*
여러 줄 주석
*/
// 변수와 상수 : var, let const
// var : ex6 이전에 사용하던 변수 생성 문법 (호이스팅 특징을 가지고 있음), 중복 선언 가능, 재할당 가능
// let : 변수 선언 문법, 자바의 변수의 형태와 동일, 중복 선언 불가, 재할당 가능, es6에서 추가
// const: 상수 선언, 재할당 불가, es6에서 추가

// 문자열 
let str = "문자열" + ' 연결 연산자 사용' + ` 이것도 사용 가능`;
console.log(str);

let name = "햄스터";
let age = 23;
let addr = "경기도 수원시"

// 템플릿 문자열 : ``(백틱)을 사용해서 만드며, ES6에서 추가 됨
console.log(`제 이름은 ${name}, 나이는 ${age}, 주소는 ${addr} 입니다.`);

// 