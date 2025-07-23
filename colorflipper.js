function changeColor(color) {
    let colorDisplay = document.getElementById("color");

    switch (color) {
        case "blue":
            document.body.style.backgroundColor = "blue";
            colorDisplay.textContent = "blue";
            break;
        case "green":
            document.body.style.backgroundColor = "green";
            colorDisplay.textContent = "Green"
            break;
        case "yellow":
            document.body.style.backgroundColor = "yellow";
            colorDisplay.textContent = "Yellow"
            break;
        case "purple":
            document.body.style.backgroundColor = "purple";
            colorDisplay.textContent = "Purple"
            break;
        default : 
           document.body.style.backgroundColor = "white";
           colorDisplay.textContent = "white";
    }
}