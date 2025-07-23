function validateForm (){
    const name=document.getElementById("name").value;
    const addr = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const sub = document.getElementById("subject").value;
    const agree = document.getElementById("agree").value;
        

        const nameErr = document.getElementById("name-error");
        const addErr = document.getElementById("address-error");
        const emailErr = document.getElementById("email-error");
        const passErr = document.getElementById("password-error");
        const subErr = document.getElementById("subject-error");
        const agreeErr = document.getElementById("agree-error");


          nameErr.textContent ="";
          addErr.textContent ="";
          emailErr.textContent="";
          passErr.textContent="";
          subErr.textContent="";
          agreeErr.textContent="";

          let isValid = true;
          if(name===""||/\d/.test(name)){
            nameErr.textContent="please enter your address.";
            isValid = false;

          }
          if(addr===""){
            addErr.textContent ="please enter your address.";
            isValid = false;
          }
          if(email ===""||email.includes("@")||!email.includes(".")){
              emailErr.textContent ="please Enter a valid email address."
              isValid=false;
          }
          if(!agree){
            agreeErr.textContent="please agree to the above information.";
            isValid=false;

          }
          if(isValid){
            alert("Form submitted sucessfully")
          } else{
            return false;
          }

          function resetErrors(){
              document.getElementById("name-error").textContent=" ";
              document.getElementById("address-error").textContent="";
              document.getElementById("email-error").textContent="";
              document.getElementById("password -error").textContent="";
              document.getElementById("subject-error").textContent="";
              document.getElementById("agree-error").textContent="";

          }
}