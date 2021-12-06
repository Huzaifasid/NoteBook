var textBox = document.getElementById("textBox");

function addBox() {
    var input1 = document.getElementById("inp1");
    var input2 = document.getElementById("inp2");

    //  console.log(input1.value = "huzaifa")
    //  console.log(input2.value)

    if (input1.value.length >= 3 && input2.value.length >= 3) {

        //  create div 
        var div = document.createElement("div");
        div.setAttribute("class", "textWork animate__animated animate__backInUp ");
        div.setAttribute("id", "sectionDiv");

        // create user title 
        var h4 = document.createElement("h4");
        var h4text = document.createTextNode(input1.value);
        h4.appendChild(h4text);
        h4.setAttribute("class", "myH1 animate__animated animate__fadeInBottomLeft");
        h4.setAttribute("id", "h4txt");
        div.appendChild(h4)



        // create user text 
        var p = document.createElement("p");
        var ptext = document.createTextNode(input2.value);
        p.appendChild(ptext);
        p.setAttribute("class", "myP animate__animated animate__fadeInBottomRight");
        p.setAttribute("id", "ptxt");
        div.appendChild(p)

        // create icon 
        var iconDiv = document.createElement("div");
        iconDiv.setAttribute("class", "myFont")
        var icon1 = document.createElement("i");
        var icon2 = document.createElement("i");
        icon1.setAttribute("class", "fas fa-pen-square animate__animated animate__fadeInTopRight");
        icon1.setAttribute("onclick", "editBtn()");
        icon2.setAttribute("class", "fas fa-minus-circle animate__animated animate__fadeInTopLeft")
        icon2.setAttribute("onclick", "deleteBtn()")
        iconDiv.appendChild(icon1)
        iconDiv.appendChild(icon2)
        div.appendChild(iconDiv)
        textBox.appendChild(div)
        input1.value = ""
        input2.value = ""
        console.log(textBox)
    } else {
        alert("Please Fill both input & enter minimum 3 value")
    }


}

function deleteBtn() {
    var sectionDiv = document.getElementById("sectionDiv")
    sectionDiv.remove()
}

function editBtn() {
    var h4txt = document.getElementById("h4txt");
    var ptxt = document.getElementById("ptxt");
    var newtxt = prompt("Enter Title");
    var newtxt2 = prompt("Enter Text");
    h4txt.innerHTML = newtxt
    ptxt.innerHTML = newtxt2

   
    console.log(h4txt)

}
function delall() {
    textBox.innerHTML = ""
}

