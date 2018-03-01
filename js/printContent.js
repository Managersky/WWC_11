
//My Script in Vanilla JS (Working without CSS what's mean you can print but without styliing)

// const buttonPrint = document.getElementById("print");

// buttonPrint.onclick = function() {
//     let restorePage = document.body.innerHTML;
//     let printContent = document.getElementsByClassName("ittinery-box")[0].innerHTML;
//     let popup = window.open("", "popup");

//     popup.document.body.innerHTML = printContent;
//     popup.focus();
//     popup.print();
// }

// Script based on jsPDF plugin / html2canvas



    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('content-to-print')[0];

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '.calendar': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true;
        }
    };

$('#print').click(function () {
pdf.addHTML($('#content-to-print')[0], function () {
    pdf.save('My-ittinery.pdf');
});
});