var email=document.getElementById("email")
var password=document.getElementById("password")



var emailRegex =/^[A-Za-z0-9+_.-]+@(.+)$/
 //console.log (nameRegex.test(0))
 function isemailvalid(){
 if  (emailRegex.test( email.value)){

     return true;
 }
 else{
     return false;
    
}}






// 3shan myd5lsh haga mttkrra 
function repeat(){
for (var i=0; i<cartoona.length;i++){


  if (cartoona[i].mail == email.value)
  {
return false;
   
  }

  else{
    return true;
    
  }
}
}


//3shan awl m3ml refresh
var cartoona;
if (localStorage.getItem("store")==null){
  cartoona=[];

}else{

  cartoona=JSON.parse(localStorage.getItem("store"))
}




function sign(){

if(isemailvalid() && repeat()){


var person={

    namee:document.getElementById("name").value,
   mail:document.getElementById("email").value,
   pass:document.getElementById("password").value

}

if (person.namee === "" || person.pass === "" ||  person. mail==="") 
   {
    alert("Please enter your username and password.");
    return false;
  }






clear()
cartoona.push(person)
localStorage.setItem("store",JSON.stringify(cartoona))
}}


function clear(){


    document.getElementById("name").value=("")
    document.getElementById("email").value=("")
    document.getElementById("password").value=("")

}

// function empty(){

//     document.getElementById("email").value=("")
//     document.getElementById("password").value=("")

// }


// LOGIN












function login(){


  for(var i=0; i< cartoona.length;i++){


    if (cartoona[i].mail==email.value && cartoona[i].pass==password.value) {

      // Redirect the user to another page.
      window.location.href = "https://www.google.com";

    } 

}

   
  
  
  }

    