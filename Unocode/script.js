document.getElementById("emailForm").addEventListener("sumbit",function(event){
   event.preventDefault();
   const email = document.getElementById("email").value;
   const errMsg =document.getElementById("error-meassage");
   const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if(pattern.test(email)){
      errMsg.style.display="none";
      alert("Email is VAlid! Form Sumbitted.");
      document.getElementById("emailForm").reset();


   }else{
      errMsg.style.display="block";
      errMsg.textContent="please enter a valid email";
   }

})