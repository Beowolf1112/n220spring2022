//Jack Goodman
//4/12/2022
//n220

//color changer
const div1 = document.createElement("div1");
div1.style.width = "100px";
div1.style.height = "100px";
div1.style.background = "red";
div1.style.color = "white"; //presence of font needed due to three squares looking like a single rectangle
div1.innerHTML = "One__"; //has underscores to add space to text
document.body.appendChild(div1); //creates an end for parent node
div1.addEventListener("click", changeStyles);