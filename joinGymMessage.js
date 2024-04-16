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
			alert("Congratulations!! " +name + " you are now a member of this gym", "");
									
			window.location.reload(); //after join and show the alert, after the user press ok, the page has to clean the data registered and allow to do it again 
	}

			
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


//Function for page Team/trainers
function freeTrial(){
	alert("You have got a free training session, Your folio number is, show it at reception", "");
}
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
		