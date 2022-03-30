// register section

 var name = document.getElementById('nme');
 var pw = document.getElementById('pw');
 var pwConfirm = document.getElementById('pwc');
 var yname = document.getElementById('yname');
 var uname = document.getElementById('uname');
 var phone = document.getElementById('phone');
 
 

 function store() {
	 
		 if (pw.value === pwc.value && pwc.value.length >1) {
 
			 localStorage.setItem('name', nme.value);
			 localStorage.setItem('pw', pw.value);
			 localStorage.setItem('yname', yname.value);
			 localStorage.setItem('uname', uname.value);
			 localStorage.setItem('phone', phone.value);
 
			 alert("You have signed up! Go back to login");
		 }
		 else {
			 alert("Passwords did not match!");
		 };
	 };
	 
 
 
 // user  Authentication 
 

 function check(){
	
	 var storedName = localStorage.getItem('name');
	 var storedPw = localStorage.getItem('pw')

	 var userName = document.getElementById('userName');
	 var userPw = document.getElementById('userPw')
	
	 if(userName.value == storedName && userPw.value == storedPw) {
		 alert('Success.')
 
		 window.open("cardetails.html", "_self");
 
	 }else {
		 alert('Invalid mail/password');
	 }
 
	 
 };
 document.getElementById("btn").addEventListener("click", function(event){
	 event.preventDefault()
	 check();
	 clear();
   });
 
 $(document).ready(function(){
 
	 
	 $("button#register").click(function(){
		 $(".layout").hide();
		 $(".reg").show();
	 })
	 $("button#back").click(function(){
		 $(".layout").show();
		 $(".reg").hide();
	 })
	 
 });

