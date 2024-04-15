document.addEventListener("DOMContentLoaded", function() {
    // Coloque todo o código JavaScript aqui
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