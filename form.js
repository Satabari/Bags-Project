var content = document.getElementById("content");
var button = document.getElementById("search_icon")

button.onclick = function() {
    if(content.className == "open"){
        content.className="";
    }
    else{
        content.className = "open";
    }
}