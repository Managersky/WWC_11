$(function () {

    // There's the list of div and box
    var $destinationItems = $("#destination-choose-list"),
        $destinationItem = $(".destination-choose"),
        $dropZone = $("#drop-zone");

    // Let the list items be draggable
    $($destinationItem, $destinationItems).draggable({
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document", //working only on this area
        helper: "clone",
        cursor: "move"
    });

    // Let the box be droppable, accepting the list items
    $dropZone.droppable({
        accept: "#destination-choose-list > .destination-choose",
        drop: function (event, ui)
        {
            if (!$dropZone[0].firstChild) //if box is empty -> add item
            {
                addItem(ui.draggable);
                $('.drag-destination').toggleClass('withItem');
            } else //if box is fill then swap item
            {
                $(ui.draggable).swapWith($dropZone[0].firstChild);

            }
        }
    });

    // Let the list be droppable as well, accepting items from the box
    $destinationItems.droppable({
        accept: "#drop-zone > .destination-choose",
        drop: function (event, ui)
        {
            backItem(ui.draggable);
        }
    });


    // Add item function
    function addItem($item) {
        $item.fadeOut(function ()
        {
            const $list = $("div", $dropZone).length ? $("div", $dropZone) : $($item).appendTo($dropZone);

            $item.appendTo($list).fadeIn(function () {
                $item
                    .animate({ width: '370px' })
                    .find("p").hide()
                    $(this).prepend(`<p style="color: #a8a8a8">05.30 - 11.30</p>`);

            });
        });
    }

    // Swap item function
    $.fn.swapWith = function (that) {
        const $this = this;
        const $that = $(that);

        // create temporary placeholder
        const $temp = $("<div>");

        // 3-step swap
        $this.before($temp);
        $that.before($this);
        $temp.after($that).remove();

        return $this.animate({
                width: '370px'
            })
            .find("p").hide()
        $(this).prepend(`<p style="color: #a8a8a8">05.30 - 11.30</p>`);
    }

    // Back item to list function
    function backItem($item) {
        $item.fadeOut(function () {
            $item
                .appendTo($destinationItems)
                .fadeIn()
                .find("p").show();
                $('.drag-destination').toggleClass('withItem');
                $item[0].firstChild.remove();
                $item.css({"width": "auto"})

        });

    }


    // $(".destination-choose").draggable({
    //     start: function () {
    //         var $draggedElement = $(this);
    //         var startingDroppable = $draggedElement.parents('#drop-zone').get(0);
    //         $draggedElement.data('aStartingDroppable', startingDroppable);
    //     },
    //     revert: function (dropTarget) {
    //         $(this).data("uiDraggable").originalPosition = {
    //             top: 0,
    //             left: 0
    //         };
    //         var startingDroppable = $(this).data('aStartingDroppable');
    //         return dropTarget === false || startingDroppable === dropTarget.get(0);
    //     }
    // });//Added drag function

    // $("#drop-zone").droppable({
    //     tolerance: 'touch',
    //     drop: function (event, ui) {
    //         var $draggedElement = ui.draggable;
    //         var draggedElementStartingDroppable = $draggedElement.data('aStartingDroppable');

    //         if (draggedElementStartingDroppable !== this) {
    //             $draggedElement
    //                 .css({ left: 'auto', top: 'auto' })
    //                 .appendTo(this);

    //             var $draggedElementStartingDroppable = $(draggedElementStartingDroppable);
    //             if ($draggedElementStartingDroppable.children().length === 0) {
    //                 $draggedElementStartingDroppable.empty();
    //             }
    //         }
    //     }
    // });//Added drop function
});



