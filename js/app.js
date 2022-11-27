function showText() {
    let num = document.getElementById("input").value;

if( num >= 80 && num <=100) {
    document.getElementById("result").innerText = "A+"
} else if( num >=70 && num <=80 ) {
    document.getElementById("result").innerText = "A"
} else if( num >=60 && num <=70 ) {
    document.getElementById("result").innerText = "A-"
} else if( num >=50 && num <=60 ) {
    document.getElementById("result").innerText = "B"
} else if( num >=40 && num <=50 ) {
    document.getElementById("result").innerText = "C"
} else if( num >=33 && num <=40 ) {
    document.getElementById("result").innerText = "D"
} else if( num >=0 && num <=33 ) {
    document.getElementById("result").innerText = "jibon ses (Fail)"
}
else{
    document.getElementById("result").innerText = "ultapalta number pawa jabe na"
}
}