function addList() {
    const inputVal = document.querySelector('input').value;
    const ulEl = document.getElementById("study-list");
    const newLi = document.createElement("li");
    //ulEl.appendChild(newLi).classList.add(inputVal);
    ulEl.insertBefore(newLi,ulEl.firstChild).classList.add(inputVal);
    document.querySelector(`.${inputVal}`).innerHTML = inputVal;
    //document.querySelector(`.${inputVal}`).setAttribute('onclick',`deleteSub()`);

    document.querySelector('input').value= "";

    let liEl = document.querySelectorAll('li');
    
    // liEl.forEach(li=>li.addEventListener('click',function(){
    //     document.querySelector('#study-list').removeChild(li);
    // })) => forEach로 돌리면 실행은 하지만 error 뜸

    // 강사님 방법
    for(let i = 0; i < liEl.length; i++) {
        liEl[i].addEventListener("click", function() {
            if(this.parentElement){ // 부모 노드가 있다면
                this.parentNode.removeChild(this); // 부모 노드에서 삭제
            }
        });
    }
};