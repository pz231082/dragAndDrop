let list=document.getElementsByClassName("lists");
let rightbox=document.getElementById("right");
let leftbox=document.getElementById("left");

let selected=null;
for(let lists of list){
    lists.addEventListener("dragstart",function(e){
        selected=e.target;
    });
}

rightbox.addEventListener("dragover",function(e){
    e.preventDefault();
});

rightbox.addEventListener("drop",function(e){
    if(selected){
        rightbox.appendChild(selected);
        selected=null;
    }
});

leftbox.addEventListener("dragover",function(e){
    e.preventDefault();


});

leftbox.addEventListener("drop",function(e){
    if(selected){
        leftbox.appendChild(selected);
        selected=null;
    }
});