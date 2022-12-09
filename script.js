let total = 0;

function on(){
    let ll = new Audio('wib.mp3');
    ll.play();
    document.getElementById("img1").style.zIndex = "1";
}

function up(){
    document.getElementById("img1").style.zIndex = "-1";
}

let touch = document.getElementById("touch");

touch.addEventListener('touchstart',function() {
    img1.style.zIndex = "1";
});

touch.addEventListener('touchend',function() {
    img1.style.zIndex = "-1";
});

function count(x) {
    total += x;
    document.getElementById("count").innerHTML = total;
}