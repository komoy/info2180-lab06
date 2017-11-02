// JavaScript File
window.onload=function(){
let search=document.getElementById("search");
search.onclick= function()
{
  let ajax = new XMLHttpRequest();
  let word=document.getElementById("word");
  var url='request.php?q='+word.value;
   ajax.onreadystatechange = function()
   {
       if(ajax.readyState==4 && ajax.status==200){
       document.getElementById("result").innerHTML = this.responseText;
       
        }
        
   };
   
   
        ajax.open("GET",url, true);
        ajax.send();
};
};