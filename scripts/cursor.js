const cursor = document.querySelector("#cursor");
const bindToQuerySelector = (querySelector) => {
    let a = document.querySelectorAll(querySelector);
    a.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
    a.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
}

//Follow Cursor
let mouseX = 0, mouseY = 0;
let xp = 0, yp =0;
cursor.style.display = "none";
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

let loop = setInterval(() => {
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    cursor.style.left = xp + 'px';
    cursor.style.top = yp + 'px';
}, 6);

//Hide if mobile device
if(navigator.userAgent.toLowerCase().match(/mobile/i)) {
    cursor.style.display = "none";
} else {
    const cursorOnMove = () => {
        cursor.style.display = "block";
        document.removeEventListener("mousemove", cursorOnMove);
    }
    document.addEventListener("mousemove", cursorOnMove)
}

// event: mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// event: mouseover
document.addEventListener("mouseover", () => {
    cursor.style.display = "block";
});

// event: mousedown
document.addEventListener("mousedown", () => {
    cursor.classList.add('click');
});

// event: mouseup
document.addEventListener("mouseup", () => {
    cursor.classList.remove('click');
});

// event: mouse enter on link
const handleMouseEnter = () => {
    cursor.classList.add('hovered');
}

// event: mouse leave on link
const handleMouseLeave = () => {
    cursor.classList.remove('hovered');
}
