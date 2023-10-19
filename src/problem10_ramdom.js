function getRst() {
    const numVal = document.getElementById("num").value;
    const winner = Math.ceil(Math.random() * numVal);
    document.querySelector('.result').innerHTML = winner;
}
