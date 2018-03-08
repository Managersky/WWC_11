
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


$(function () {
    var pdf = new jsPDF();

    var specialElementHandlers = {
        // this element is bypass
        '#test': function (element, renderer) {
            return true;
        }
    };

    //margins
    left = 5,

    $('#savePDF').click(function () {
        pdf.internal.scaleFactor = 3.75; //scale content to print
        pdf.addHTML($('#content-to-print')[0], left, 5, {
                    pagesplit: true,
                },
                function () {
                    pdf.save('My-ittinery.pdf');
                });
    });

    $('#print').click(function () {
        $("#content-to-print").printMe({ "path": ["../css/styles.css"] });
    });

});