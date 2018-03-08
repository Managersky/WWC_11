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

$.expr[':'].contains = function (a, i, m) { //insensitive version of the :contains() (:constains() - Select all elements that contain the specified text)
    return $(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

$('#search').keyup(function () {
    let searchValue = this.value;
    searchValue = searchValue.split(" ");
    $('#destination-choose-list > div').hide();
    $.each(searchValue, function (i) { //Split the search string and parse using .each (.each - Iterate over a jQuery object, executing a function for each matched element)
        $('#destination-choose-list > div:contains("' + searchValue[i] + '")').show();
    });
});