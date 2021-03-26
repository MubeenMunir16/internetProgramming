// exercise 7



function textGettingFunction() {
    var content = document.getElementById('text_area_id');
    //alert(content.value);
    var div_content = document.getElementById('div_id');
    div_content.firstChild.nodeValue = content.value;
}

function myLoadFunction() {
    var button = document.getElementById('button_id');
    var content = document.getElementById('text_area_id');
    content.addEventListener('keyup', textGettingFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction)