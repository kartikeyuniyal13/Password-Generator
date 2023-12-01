upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
lowerCase="qwertyuiopasdfghjklzxcvbnm"
numbers="1234567890";
spChar="!@#$%^&*_-><.?/\,~";
totChar=upperCase+lowerCase+numbers+spChar;
var ranpass=document.getElementById("inputBox")
var genpass=document.querySelector(".but");
var copyimg=document.getElementById("copyimg");
const len=12;
function generatePassword(){
    var password="";



    password+=upperCase[Math.floor(Math.random()*26)];
    password+=lowerCase[Math.floor(Math.random()*26)];
    password+=numbers[Math.floor(Math.random()*10)];
    password+=spChar[Math.floor(Math.random()*spChar.length)];
  
     while(password.length!=len){
        password+=totChar[Math.floor(Math.random()*totChar.length)];
     }
    
     ranpass.value=password;

}


function copyPassword(){
    ranpass.select();
    document.execCommand("copy");
}

copyimg.addEventListener("click",copyPassword);
genpass.addEventListener("click",generatePassword);