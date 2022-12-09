let total = 0;

function on(){
    let ll = new Audio('wib.mp3');
    ll.play();
    document.getElementById("img1").style.zIndex = "-1";
}

function up(){
    document.getElementById("img1").style.zIndex = "1";
}

let touch = document.getElementById("touch");

touch.addEventListener('touchstart',function() {
    img1.style.zIndex = "-1";
});

touch.addEventListener('touchend',function() {
    img1.style.zIndex = "1";
});

function count(x) {
    total += x;
    document.getElementById("count").innerHTML = total;
    if (total == 40) {
        let J = new Audio('J.mp3');
        J.play();
        document.getElementById("jum").style.display = "block";
        document.getElementById("jum").style.width = "100%";
        document.getElementById("jum").style.height = "100%";
        document.getElementById("jum").style.objectFit = "cover";
        document.getElementById("jum").style.zIndex = "5";
    }

    else if (total == 45) {
        document.getElementById("jum").style.display = "none";
    }
}