/*Code to change the text box color*/
document.addEventListener("DOMContentLoaded", function() {
    var messageDiv = document.getElementById("messageDiv");
    var messageP = document.getElementById("messageP");

    messageDiv.addEventListener("mouseover", function() {
        messageDiv.style.backgroundColor = "black";
        messageP.style.backgroundColor = "black"
        messageDiv.style.color = "white";

    });
    
    messageDiv.addEventListener("mouseout", function() {
        messageDiv.style.backgroundColor = "";
        messageP.style.backgroundColor = ""
        messageDiv.style.color = "";
    });
});

/*Code to change the text box color*/
document.addEventListener("DOMContentLoaded", function() {
    var joinUsListener = document.getElementById("joinUsListener");
    var pJoinUs = document.getElementById("pJoinUs");

    joinUsListener.addEventListener("mouseover", function(){
        joinUsListener.style.backgroundColor = "black";
        pJoinUs.style.color = "white";
        pJoinUs.style.backgroundColor = "black"
    });

    joinUsListener.addEventListener("mouseout", function(){
        joinUsListener.style.backgroundColor = "";
        pJoinUs.style.color = "";
        pJoinUs.style.backgroundColor = ""
    });
});

/*Adding banner style when the mouse is over*/
document.addEventListener("DOMContentLoaded", function() {
    var blur = document.getElementById("blur");
    var shadow1 = document.getElementById("shadow1");
    var shadow2 = document.getElementById("shadow2");

    blur.addEventListener("mouseover", function(){
        blur.style.filter = "blur(3px)";
        shadow1.style.textShadow = "4px 4px 4px black";
        shadow2.style.textShadow = "5px 6px 5px black";
    });

    blur.addEventListener("mouseout", function(){
        blur.style.filter = "";
        shadow1.style.textShadow = "";
        shadow2.style.textShadow = "";
    });
});