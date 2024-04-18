/*Code to change the text box color*/
document.addEventListener("DOMContentLoaded", function() {
    var messageDiv = document.getElementById("messageDiv");
    var messageP = document.getElementById("messageP");
    /*change style style when the mouse is over*/
    messageDiv.addEventListener("mouseover", function() {
        messageDiv.style.backgroundColor = "black";
        messageP.style.backgroundColor = "black"
        messageDiv.style.color = "white";

    });
    /*change style when the mouse is not over*/
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
    /*change style style when the mouse is over*/
    joinUsListener.addEventListener("mouseover", function(){
        joinUsListener.style.backgroundColor = "black";
        pJoinUs.style.color = "white";
        pJoinUs.style.backgroundColor = "black"
    });
    /*change style when the mouse is not over*/
    joinUsListener.addEventListener("mouseout", function(){
        joinUsListener.style.backgroundColor = "";
        pJoinUs.style.color = "";
        pJoinUs.style.backgroundColor = ""
    });
});

/*Code to change the banner text Style*/
document.addEventListener("DOMContentLoaded", function() {
    var blur = document.getElementById("blur");
    var shadow1 = document.getElementById("shadow1");
    var shadow2 = document.getElementById("shadow2");
    /*Adding banner style when the mouse is over*/
    blur.addEventListener("mouseover", function(){
        blur.style.filter = "blur(3px)";
        shadow1.style.textShadow = "4px 4px 4px black";
        shadow2.style.textShadow = "5px 6px 5px black";
    });
    /*Adding banner style when the mouse is not over*/
    blur.addEventListener("mouseout", function(){
        blur.style.filter = "";
        shadow1.style.textShadow = "";
        shadow2.style.textShadow = "";
    });
});

/*Code to the BMI calculator*/
function checkBmi(){
    //get weight to calculate
    var weight = document.getElementById("weight");
    var weightNum = weight.value;
    
    //get height to calculate
    var height = document.getElementById("height");
    var heightNum = height.value;
    
    //get row/table element
    var table = document.getElementById("table");
    var tr1 = document.getElementById("tr1");
    var tr2 = document.getElementById("tr2");
    var tr3 = document.getElementById("tr3");
    var tr4 = document.getElementById("tr4");
    var tr5 = document.getElementById("tr5");
    var tr6 = document.getElementById("tr6");

    //Calculate BMI
    var bmiCalculated = parseFloat(weightNum/(heightNum * heightNum));
    try{
        if(isNaN(bmiCalculated)){
            throw new Error("NaN");
        }

        table.classList.remove("hide-table")

        //Check if the BMI value and return the metric
        if(bmiCalculated <= 18.5){
            //remove the class and add the new one
            tr1.classList.remove("table-secondary");
            tr1.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr2.classList.remove("table-info");
            tr3.classList.remove("table-info");
            tr4.classList.remove("table-info");
            tr5.classList.remove("table-info");
            tr6.classList.remove("table-info");

            tr2.classList.add("table-secondary");
            tr3.classList.add("table-secondary");
            tr4.classList.add("table-secondary");
            tr5.classList.add("table-secondary");
            tr6.classList.add("table-secondary");

            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " under weight"


        }else if(bmiCalculated > 18.5 && bmiCalculated < 25){
            //remove the class and add the new one
            tr2.classList.remove("table-secondary");
            tr2.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr1.classList.remove("table-info");
            tr3.classList.remove("table-info");
            tr4.classList.remove("table-info");
            tr5.classList.remove("table-info");
            tr6.classList.remove("table-info");

            tr1.classList.add("table-secondary");
            tr3.classList.add("table-secondary");
            tr4.classList.add("table-secondary");
            tr5.classList.add("table-secondary");
            tr6.classList.add("table-secondary");

            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " You are in the healthy weight"

        }else if(bmiCalculated >= 25 && bmiCalculated < 30){
            //remove the class and add the new one
            tr3.classList.remove("table-secondary");
            tr3.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr2.classList.remove("table-info");
            tr1.classList.remove("table-info");
            tr4.classList.remove("table-info");
            tr5.classList.remove("table-info");
            tr6.classList.remove("table-info");

            tr1.classList.add("table-secondary");
            tr2.classList.add("table-secondary");
            tr4.classList.add("table-secondary");
            tr5.classList.add("table-secondary");
            tr6.classList.add("table-secondary");
            
            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " You are overweight"
            
        }else if(bmiCalculated >= 30 && bmiCalculated < 35){
            //remove the class and add the new one
            tr4.classList.remove("table-secondary");
            tr4.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr2.classList.remove("table-info");
            tr3.classList.remove("table-info");
            tr1.classList.remove("table-info");
            tr5.classList.remove("table-info");
            tr6.classList.remove("table-info");

            tr2.classList.add("table-secondary");
            tr3.classList.add("table-secondary");
            tr1.classList.add("table-secondary");
            tr5.classList.add("table-secondary");
            tr6.classList.add("table-secondary");
            
            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " You are obese class I"
            //tr4.classList.add("");
        }else if(bmiCalculated >= 35 && bmiCalculated < 40){
            //remove the class and add the new one
            tr5.classList.remove("table-secondary");
            tr5.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr2.classList.remove("table-info");
            tr3.classList.remove("table-info");
            tr4.classList.remove("table-info");
            tr1.classList.remove("table-info");
            tr6.classList.remove("table-info");

            tr2.classList.add("table-secondary");
            tr3.classList.add("table-secondary");
            tr4.classList.add("table-secondary");
            tr1.classList.add("table-secondary");
            tr6.classList.add("table-secondary");
            
            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " You are obese class II"
            //tr5.classList.add("");
        }else{
            //remove the class and add the new one
            tr6.classList.remove("table-secondary");
            tr6.classList.add("table-info");

            //make sure thar the other classes has a diferent color
            tr2.classList.remove("table-info");
            tr3.classList.remove("table-info");
            tr4.classList.remove("table-info");
            tr5.classList.remove("table-info");
            tr1.classList.remove("table-info");

            tr2.classList.add("table-secondary");
            tr3.classList.add("table-secondary");
            tr4.classList.add("table-secondary");
            tr5.classList.add("table-secondary");
            tr1.classList.add("table-secondary");
            
            document.getElementById("bmi").innerHTML = bmiCalculated.toFixed(1);
            //document.getElementById("msgReturn").innerHTML = " You are obese class III"
            //tr5.classList.add("");
        }
        }catch(error){
        alert("Only numbers are allowed");
    }
}


//check if my DOM is loades
document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("numberg");

  //check if my input is valid
  if (input) {
    //call my method when enter is pressed
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        guess();
      }
    });
  } else {
    console.error("Element with id 'numberg' not found.");
  }
});

var generateRand = Math.floor(Math.random() * 10 + 1);

function guess(){
    var number = document.getElementById("numberg").value.trim();
    var hint = document.getElementById("hint");
    var resultMsg = document.getElementById("result-message");

    console.log("valor digitado: " + number);

    if(isNaN(number)){
        alert("Only numbers are allowed")
    }else if(number == generateRand){
        resultMsg.classList.remove("hide-table");
        document.getElementById("result-message").innerHTML = "Congratulations, you got the right number!"
    }else if(number > 10 || number < 0){
        document.getElementById("result-message").innerHTML = "The input should be between 0 and 10"
    }else{
        resultMsg.classList.remove("hide-table");
        document.getElementById("result-message").innerHTML = "Wrong answer!";
    }
}

function getHint(){
    var hint = document.getElementById("hint");
    let number = document.getElementById("numberg").value;
    
    if(number > generateRand){
        document.getElementById("hint").innerHTML = "<b> < </>"
    }else{
        document.getElementById("hint").innerHTML = "<b> > </>"
    }
    
}

