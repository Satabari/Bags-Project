var content = document.getElementsByClassName("content");
var button = document.getElementById("search_icon")

button.onclick = function() {
    if(content.id == "open"){
        content.id = "";
    }
    else{
        content.id = "open";
    }
}