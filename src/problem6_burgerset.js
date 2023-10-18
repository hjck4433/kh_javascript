// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원 할인)
// CSS를 이쁘게 적용
// let bName = ["상덕버거", "중덕버거", "하덕버거"]
// let dName = ["콜라", "사이다"]

// 1
// let burger = [];
// let drink = [];
// for(let i =0; i < 5; i++) {
//     if(i < 3) burger.push(Number(prompt(`${bName[i]} 가격 :`)));
//     else drink.push(Number(prompt(`${dName[i-3]} 가격 :`)));
// };
// let lcost;
// for(let i = 0; i < 3; i++) {
//     for(let j =0; j<2; j++){
//         if(i === 0 && j == 0) lcost = burger[i] + drink[j] - 50;
//         else {
//             if (burger[i] + drink[j] - 50 < lcost) lcost = burger[i] + drink[j]-50;
//         }
//     }
// };

//2
// let minB;
// let minD;
// for(let i = 0; i < 5; i++) {
//     if(i < 3){
//         let bPrice = Number(prompt(`${bName[i]} 가격 :`,""));
//         if (i === 0) minB = bPrice;
//         else {
//             if (bPrice < minB) minB = bPrice;
//         }
        
//     }else {
//         let dPrice =  Number(prompt(`${dName[i-3]} 가격 :`,""));
//         if (i === 3) minD = dPrice;
//         else {
//             if (dPrice<minD) minD = dPrice;
//         }
//     }
// }

// document.write(`<div class="rst-box">${minB + minD -50}원</div>`);

//teacher
function getPrice(){
    let menu = [];
    for(let i = 0; i < 5; i++){
        menu[i] =Number(document.getElementById("menu"+(i+1).value));
    }
    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++) {
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById('rst-box').innerText = (minB + minD -50) + "원";
}