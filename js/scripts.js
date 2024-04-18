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

//Function to validate the form and give alerts If the information is incomplete or incorrect, it
//also confirms that you have joined once you click the bottom after all is correct
function joinGym(){
		var name =document.getElementById('nameSave').value;
	var surname=document.getElementById('surnameSave').value;
	var phone =document.getElementById('phoneSave').value;
	var email=document.getElementById('emailSave').value;
	var emailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;//validate that is an email
	//var validEricode=/^[a-zA-Z0-9]{7}$/; //validate alphanumeric...I removed this validatio, is not a must
	var year=document.getElementById('yearSave').value;
	var selected=document.getElementById('selectedSave').value;
	var checkBoxAge= document.getElementById ('checkBoxAgeSave');
	
	//variable extra to validate all the information to allow join (instead of all the if/else I was using before
	var correctInformation=true

	if(name == ''){
		alert("introduce your name");
		correctInformation=false;
	}
	if(surname == ''){
		alert("introduce your surname");
		correctInformation=false;
	}
	if (phone=='' || phone.length !==10 || !/^[0-9]{10}$/.test(phone)){
		alert("introduce a valid phone number");
		correctInformation=false;
	}

	if (email=='' ||!emailValid.test(email)){
		alert("introduce a valid email");
		correctInformation=false;
	}

	if (year=='' ||year<1907 ||year>2008){
		alert("introduce a valid year, you must be over 16 to join");
		correctInformation=false;
	}

	if(selected == ''){
		alert("introduce the Membership or Pass of your choice");
		correctInformation=false;
	}

	if(!checkBoxAge.checked){
		alert("Confirm that you are 16 or over 16 years old");
		correctInformation=false;
	}
	
	if(correctInformation){
			alert("Congratulations!! " +name + " " +surname + " you are now a member of this gym", "");
		var minJ = Math.ceil(1000);
		var maxJ = Math.floor(9000);
		minJ=Math.ceil(minJ);
		maxJ=Math.floor(maxJ);
		var noFolioJoin= Math.floor(Math.random() * (maxJ - minJ + 1) + minJ);
		alert("Your folio number is: " + noFolioJoin + " , show it at reception to make your payment");
		window.location.reload(); //after join and show the alert, after the user press ok, the page has to clean the data registered and allow to do it again 
		}
		

	}	

	
	//For random number to get the number folio once some JOINS
		function numerFolioJoin() {
		var min = Math.ceil(1000);
		var max = Math.floor(9000);
		min=Math.ceil(min);
		max=Math.floor(max);
		var noFolioSession= Math.floor(Math.random() * (max - min + 1) + min);
		alert("You got a free training session, Your folio number is: " + noFolioSession + " , show it at reception to register you and book your session");
		}
	

//Functions to pop up  extra information _in an image_ with the detail once you click if you want to know more about the day pass or the membership
	//the one with the membership
		//to open
		function openImgMembership() {
		  var floatingMembers = document.getElementById('floatingMembers');
		 if(floatingMembers.style.display=='none'){
				floatingMembers.style.display='block';
		}else{
			floatingMembers.style.display='none';
		}
		}
		//to close
		function closeImgMembership() {
		  var floatingMembers = document.getElementById('floatingMembers');
			floatingMembers.style.display='none';
			}
			
		//the one with the DAYPASS
		//to open
		function openImgDay() {
		  var floatingDay = document.getElementById('floatingDay');
		 if(floatingDay.style.display=='none'){
				floatingDay.style.display='block';
		}else{
			floatingDay.style.display='none';
		}
		}
		//to close
		function closeImgDay() {
		  var floatingDay = document.getElementById('floatingDay');
			floatingDay.style.display='none';
			}


//For random number to get the number folio for the free session
		function freeTrial() {
		var min = Math.ceil(1000);
		var max = Math.floor(9000);
		min=Math.ceil(min);
		max=Math.floor(max);
		var noFolioSession= Math.floor(Math.random() * (max - min + 1) + min);
		alert("You got a free training session, Your folio number is: " + noFolioSession + " , show it at reception to register you and book your session");
		}

//to make imagen apper on click on the page abou OUR TEAM
//to open
		//First profile-trainer 1
		function openImgTrainers() {
		  var floatingTrainers= document.getElementById('floatingTrainers');
		 if(floatingTrainers.style.display=='none'){
				floatingTrainers.style.display='block';
		}else{
			floatingTrainers.style.display='none';
		}
		}
		//to close
		function closeImgTrainers() {
		  var floatingTrainers = document.getElementById('floatingTrainers');
			floatingTrainers.style.display='none';
			}
		
		// profile-trainer 2
		function openImgTrainers2() {
		  var floatingTrainers2 = document.getElementById('floatingTrainers2');
		 if(floatingTrainers2.style.display=='none'){
				floatingTrainers2.style.display='block';
		}else{
			floatingTrainers2.style.display='none';
		}
		}
		//to close
		
		function closeImgTrainers2() {
		  var floatingTrainers2 = document.getElementById('floatingTrainers2');
			floatingTrainers2.style.display='none';
			}
			
		// profile-trainer 3
		function openImgTrainers3() {
		  var floatingTrainers3 = document.getElementById('floatingTrainers3');
		 if(floatingTrainers3.style.display=='none'){
				floatingTrainers3.style.display='block';
		}else{
			floatingTrainers3.style.display='none';
		}
		}
		//to close
		
		function closeImgTrainers3() {
		  var floatingTrainers3 = document.getElementById('floatingTrainers3');
			floatingTrainers3.style.display='none';
			}
			
		// profile-trainer 4
		function openImgTrainers4() {
		  var floatingTrainers4 = document.getElementById('floatingTrainers4');
		 if(floatingTrainers4.style.display=='none'){
				floatingTrainers4.style.display='block';
		}else{
			floatingTrainers4.style.display='none';
		}
		}
		//to close
		
		function closeImgTrainers4() {
		  var floatingTrainers4 = document.getElementById('floatingTrainers4');
			floatingTrainers4.style.display='none';
			}
		
