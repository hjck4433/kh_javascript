// 종료일 2월 21일 
//-126

const nowDate = new Date();
const endDate = new Date("2024-2-22");
const remain = parseInt((nowDate - endDate)/(1000*60*60*24));
console.log(remain);
const remain2 = parseInt((nowDate.getTime() - endDate.getTime())/(1000*60*60*24));
console.log(remain2);

//document.getElementById('remain').innerHTML = `${(remain * -1)}`;
document.querySelector('#remain').innerHTML = `${(remain * -1)}`;
