const buttonPrint = document.getElementById("print");

buttonPrint.onclick = function() {
    let restorePage = document.body.innerHTML;
    let printContent = document.getElementsByClassName("ittinery-box")[0].innerHTML;
    let popup = window.open("", "popup");

    popup.document.body.innerHTML = printContent;
    popup.focus();
    popup.print();
}
