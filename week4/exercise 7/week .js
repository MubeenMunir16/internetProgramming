// exercise 6
 function changeFunctionEnter()
 {
     var element =  document.getElementById('heading1_id');
     element.firstChild.nodeValue = "Developed by Mubeen Munir";
 }
 function changeFunctionLeave()
 {
     var element =  document.getElementById('heading1_id');
     element.firstChild.nodeValue = "The value of heading is changed";
 }
 function myLoadFunction()
 {
     var element = document.getElementById('heading1_id');
     element.addEventListener('mouseenter',changeFunctionEnter);
     element.addEventListener('mouseleave',changeFunctionLeave);
 }
 document.addEventListener('DOMContentLoaded', myLoadFunction);
