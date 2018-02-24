startDrag = function(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.dropEffect = "move";
};

allowDrop = function(e) {
    e.preventDefault();
    if (e.target.getAttribute("draggable") == "true")
        e.dataTransfer.dropEffect = "none";
    else
        e.dataTransfer.dropEffect = "all";
};

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


