startDrag = function(e) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text", e.target.id);
    e.target.style.opacity = "0.7";
}

allowDrop = function(e) {
    e.preventDefault();
}

dragDrop = function(e) {
    e.preventDefault();
    let element_id = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(element_id));
    element_id.removeAttribute("dragabble");
    element_id.style.cursor = "default";
}

const dragZone = document.getElementById("drop-zone");
const dragDestination = document.querySelectorAll(".destination-choose");

for (i = 0; i < dragDestination.length; i++) {
    dragDestination[i].id = "destination" + i;
    dragDestination[i].addEventListener("dragstart", startDrag);
    dragDestination[i].addEventListener("drop", dragDrop);
}

dragZone.addEventListener("dragover", allowDrop);
dragZone.addEventListener("drop", dragDrop);


