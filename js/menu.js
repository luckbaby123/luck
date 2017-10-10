 var menu= document.getElementById('nav-menu');
var stoptime=setTimeout(function(){
 	  $("#nav-menu").hide();
 },1500);
 
clearTimeout('stoptime');
$("#nav").mouseover(function(){
     // $("#nav-menu").show();
      menu.style.display="block";
         
 });
 $("#nav").mouseleave(function(){
     // $("#nav-menu").show();
      menu.style.display="none";
         
 });

