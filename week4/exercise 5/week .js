// exercise 4

 function myLoadFunction()
 {
     var element = document.getElementById('heading1_id');
     element.firstChild.nodeValue = 'The value of heading is changed';
    
     var paragraph = document.getElementById('fav_para');
     paragraph.firstChild.nodeValue = 'The value of paragraph is changed';
 }
 document.addEventListener('click', myLoadFunction);
 
 