//Function to validate the form and give alerts If the information is incomplete or incorrect, it
//also confirms that you have joined once you click the bottom after all is correct
function joinGym(){
	var name =document.getElementById('nameSave').value;
	var surname=document.getElementById('surnameSave').value;
	var phone =document.getElementById('phoneSave').value;
	
	
	if(name !== '' && surname!==''&& phone!==''){
		if (phone.length ==10&& /^[0-9]{10}$/.test(phone)){
	alert("Congratulations!!, you are now a member of this gym", "");
	}
	else{
		alert("introduce a valid phone number");
	}
	}else{
		alert("The information is incomplete");
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
