// 콜백(callback) : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행 될 때 호출되는 함수 
// 콜백 함수는 비동기적인 작업을 처리할 때 많이 사용
function cry() {
    console.log("cry");
}
function sing(){
    console.log("sing");
}
function dance(){
    console.log("dance");
}
// 일반 함수로 호출 하기
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
//checkMood("sad");

// 콜백 함수
function checkMoodCallback(mood, goodCall, badCall) {
    if(mood === "good") goodCall();
    else badCall();
}
// checkMoodCallback("good",cry,cry);

// 타이머 설정과 Callback
function buyTobe(item, price, quantity, callback = function (n) {
    console.log("지불 할 금액은 : " + n + "입니다.");
}) {
    console.log(item + "상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요합니다.");
    setTimeout(function() {
        let total = price * quantity;
        callback(total);
    }, 2000); // 2초 후 익명함수 호출
}
// function pay(n) {
//     console.log("지불 할 금액은 : " + n + "입니다.");
// }

//buyTobe("\'맥북에어(스타라이트)\'",1300000, 2);

// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수를 접근 할 수 있는 매커니즘
function makeCounter() {
    let count = 100;
    return function() {
        count++;
        console.log(count);
    }
}
const counter = makeCounter(); // makeCounter를 호출하여 클로저를 생성하고 반환
counter(); // 내부 함수를 호출하여 count를 증가하고 값 출력
counter();
counter();
