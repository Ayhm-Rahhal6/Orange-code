document.getElementById("boldBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.fontWeight = textElement.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("ItalicBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.fontStyle = textElement.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("leftAlignBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textAlign = "left";
});

document.getElementById("centerAlignBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textAlign = "center";
});

document.getElementById("rightAlignBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textAlign = "right";
});

document.getElementById("upperBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textTransform = "uppercase";
});

document.getElementById("lowerBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textTransform = "lowercase";
});

document.getElementById("capBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.textTransform = "capitalize";
});

document.getElementById("clearBtn").addEventListener("click", function() {
    let textElement = document.getElementById("textArea");
    textElement.value = "";
});

document.getElementById("colorBtn").addEventListener("input", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.color = document.getElementById("colorBtn").value;
});

document.getElementById("bckgBtn").addEventListener("input", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.backgroundColor = document.getElementById("bckgBtn").value;
});

document.getElementById("sizeBtn").addEventListener("input", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.fontSize = document.getElementById("sizeBtn").value + "px";
});

document.getElementById("fontFamilySelect").addEventListener("input", function() {
    let textElement = document.getElementById("textArea");
    textElement.style.fontFamily = document.getElementById("fontFamilySelect").value ;
});

let printButton = document.getElementById("printBtn");
        printButton.addEventListener("click", function() {
        let output = document.getElementById("output");
        let inputText = document.getElementById("textArea");
            output.innerText = inputText.value; 
        });