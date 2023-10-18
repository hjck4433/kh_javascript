
function checkSocialNum() {
    let inputNum = document.getElementById('social-num').value;
    console.log(inputNum);
    if (inputNum.length > 14)  {
        document.getElementById('error').innerHTML = "주민번호는 -를 포함 14자 입니다.";
    }else if (inputNum.indexOf('-') === -1){
        document.getElementById('error').innerHTML = "-를 포함하여 입력하세요";
    }else printrst(inputNum);
};

function printrst(inputNum) {
    let socialNum = inputNum.split('-');
    let genNum = Number(socialNum[1][0]);
    let gender = (genNum === 1 || genNum === 3) ? "남성" : "여성";
    
    const myDate = new Date();
    const currYear = myDate.getFullYear();
    let year = Number(socialNum[0].slice(0,2));
    let bYear = (genNum === 1 || genNum === 2) ? (1900+year) : (2000+year);

    document.getElementById('box').innerHTML = `<div>성별 : ${gender} 나이 : ${currYear-bYear}</div>`;
};