/* function insert(x){
 // var x=document.querySelector(".button").value;
  document.querySelector(".texte").value=x;
}; */
// document.getElementsByClassName("button").onclick= insert(document.getElementsByClassName("button").value); 

//document.querySelector("body").addEventListener("click", function(){ document.querySelector(".texte").value=4;});   
var buttons = document.querySelectorAll(".button");
for (const button of buttons) {
  button.addEventListener('click',function(){
   var x=button.value;
  switch(x)
  {
   case '=' :
   	document.querySelector(".texte").value=eval(document.querySelector(".texte").value);
    break ;
   
    case 'C':
   	document.querySelector(".texte").value="";
      break;
   case 'Del':
       var exp=document.querySelector(".texte").value;
        document.querySelector(".texte").value=exp.substring(0,exp.length-1);
        break;
    default:  document.querySelector(".texte").value=document.querySelector(".texte").value+x ;
     break;
   }
 })   
}