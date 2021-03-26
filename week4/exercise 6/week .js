function myClickFunction1()
 {
     var element = document.getElementById('heading1_id');
     element.firstChild.nodeValue = 'The value of heading is changed';
 }
 function myClickFunction2()
 {
     var paragraph = document.getElementById('fav_para');
     paragraph.firstChild.nodeValue = 'The value of paragraph is changed';
 }

 function myLoadFunction()
 {
     var element = document.getElementById('heading1_id');
     element.addEventListener('mouseenter', myClickFunction1);   
     var element1 = document.getElementById('fav_para');
     element1.addEventListener('mouseleave', myClickFunction2);   
 }
 document.addEventListener('DOMContentLoaded', myLoadFunction);  