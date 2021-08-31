const cursor = document.querySelector("#cursor");
const bindToQuerySelector = (querySelector) => {
    let a = document.querySelectorAll(querySelector);
    a.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
    a.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
};

cursor.style.display = "none";

// Define pos vars
let xp = 0, yp = 0;
let mouseX = 0, mouseY = 0;

// On mouse move
$(document).on('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(window).on('scroll', function(e) {
    
});

// Loop
let loop = setInterval(e => {
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $('#cursor').css({
        left: xp,
        top: yp,
    });
}, 6);

// Show on first movement
const cursorMove = () => {
    cursor.style.display = "block";
    document.removeEventListener("mousemove", cursorMove);
};
document.addEventListener("mousemove", cursorMove);

// Event: mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// Event: mouseover
document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});

// Event: mousedown
document.addEventListener("mousedown", () => {
    cursor.classList.add('click');
});

// Event: mouseup
document.addEventListener("mouseup", () => {
    cursor.classList.remove('click');
});

// Event: mouse enter on link
const handleMouseEnter = () => {
    cursor.classList.add('hovered');
};

// Event: mouse leave on link
const handleMouseLeave = () => {
    cursor.classList.remove('hovered');
};
