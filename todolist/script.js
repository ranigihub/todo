const inputebox = document.getElementById("inpute-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputebox.value === ''){
        alert("your must wright something")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputebox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);

    }
    inputebox.value = "";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName ==="SPAN"){
     e.target.parentElement.remove();
    }
   
}, false)