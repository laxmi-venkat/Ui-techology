function genPass(len,upper,nums,special){
    const lower ="abcdefghijklmnopqrstuvwxyz";
    const upperChars ="ABCDEFGHIJKLMONP";
    const numChars = "0123456789";
    const specialChars ="!@#$%^&*()-_[]{};:,.<>?";
    let chars = lower;
    if (upper) chars += upperChars;
    if(nums) chars+=numChars;
    if(special) chars+= specialChars;
    let pass="";
    for(let i =0; i <len; i++){
        const randIdx =Math.floor(Math.random()*chars.length);
        pass+=chars[randIdx];
    }
    return pass;

} 
function generate (){
    const len =parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;
    const pass = genPass(len,upper,nums,special);
    document.getElementById("passOut").textContent=pass;
}
function reset(){
    document.getElementById("len").value=13;
    document.getElementById("upper").value=true;
    document.getElementById("nums").checked=true;
    document.getElementById("special").checked=true;
    document.getElementById("passOut").textContent="Your password will appear here"
}