var button = document.getElementById("b");
var num = 0;
var color = "none";
button.addEventListener('click', function() {
    num = (num + 1) % 3;
    switch (num) {
        case 0:
            color = "red";
            break;
        case 1:
            color = "blue";
            break;
        case 2:
            color = "green";
            break;
        default:
            color = "black";
            break;
    }
    document.body.style.backgroundColor = color;
    console.log("color is " + color);
});