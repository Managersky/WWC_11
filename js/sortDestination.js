$(".sort-destination").on("click", function (e) {
    e.preventDefault();
    const currentFilter = $(this).data("category");
    const currentText = $(this).text();
    $(".destination-name").text(currentText);
    $("#destination-choose-list .destination-choose").hide().filter(function () {
        if (currentFilter === 'all' || currentFilter === $(this).data("category")) {
            return true;
        } else {
            return false;
        }
    }).show();

});