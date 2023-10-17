function gugu() {
    for(let i = 2; i <=9 ; i++) {
        document.write('<div class="box">' + i + "단");
        for (let j = 1; j<=9; j++){
            let rst = i * j;
            document.write(`<span>${i}X${j}=${rst}</span>`);
        }
        document.write("</div>")
    }
    
    for(let i = 2; i <=9; i++) {
        document.write("<table>");
        document.write("<tr><th>"+i+"단</th></tr>");
        for(let j = 1; j <=9; j++) {
            document.write("<tr><td>"+i+"x"+j+"="+(i*j)+"</td></tr>");
        }
        document.write("</table>");
    }   
};
