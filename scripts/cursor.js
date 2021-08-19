const cursor = document.querySelector("#cursor");
function bindToQuerySelector(querySelector) {
    var a = document.querySelectorAll(querySelector);
    a.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
    a.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
}
//Follow Cursor
var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;
cursor.style.display = "none";
$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;
});

var $loop = setInterval(function(){
    $xp += (($mouseX - $xp)/6);
    $yp += (($mouseY - $yp)/6);
    $("#cursor").css({left:$xp +'px', top:$yp +'px'});
}, 6);

//Hide if mobile device
if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
    cursor.style.display = "none";
}
else {
    document.addEventListener("mousemove", cursorOnMove)

    function cursorOnMove() {
    	cursor.style.display = "block";
      	document.removeEventListener("mousemove", cursorOnMove);
    }
}

// event: mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})

// event: mouseover
document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
})

// event: mousedown
document.addEventListener("mousedown", () => {
    cursor.classList.add('click');
})

// event: mouseup
document.addEventListener("mouseup", () => {
    cursor.classList.remove('click');
})

// event: mouse enter on link
function handleMouseEnter() {
    cursor.classList.add('hovered');
}

// event: mouse leave on link
function handleMouseLeave() {
    cursor.classList.remove('hovered');
}
