function bodyLoad() {
    let btn = document.getElementById("btn");

    btn.style.fontSize = "15px";
    btn.style.backgroundColor = "darkred";
    btn.style.borderRadius = "20px";
    btn.style.color = "white";
    btn.style.padding = "10px";
    btn.style.borderStyle = "dotted";
}

function changeTheme() {
    document.getElementById("body").style.backgroundColor = "#E25A5D";
    document.getElementById("nameheading").style.backgroundColor = "#EB7451";
    document.getElementById("anchorTag").style.color = "#6c5ddf";
    document.getElementById("anchorTag").style.borderWidth = "0px";
}

function changeImageOver() {
    document.getElementById("cartoon_img").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpShwC7wExBmkxo_uRmMQI0jHBQqYsxFKp2w&s";
}

function changeImageLeave() {
    document.getElementById("cartoon_img").src =
        "https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";
}