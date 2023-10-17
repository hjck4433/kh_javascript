// n개의 정수를 입력 받아 n * n 출력
// CSS 적용해서 출력
// 3
// 1 2 3
// 4 5 6
// 7 8 9

let n = Number(prompt("정수 입력"));

for (i=1; i <= n*n; i++) {
    if(i%n == 1) document.write('<div class="box">')
    document.write(`<span>${i}</span>`);
    if(i % n == 0) document.write('</div>');
}