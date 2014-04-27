
var next;
$('.next').click(function() {
    if (next === undefined) {
        next = $('.section').next();
    } else {
        if (prev === undefined) {
            next = next.next();
        } else {
            next = prev.next();
                prev = undefined;
        }
    }
    $(".wrapper").scrollTo(next, 800, {
        margin: true
    });
});


var prev;
$('.prev').click(function() {
    if (prev === undefined) {
        if (next === undefined) {
            prev = $('.section').prev();
        } else {
            prev = next.prev();
        }

    } else {
        prev = prev.prev();
    }
    $(".wrapper").scrollTo(prev, 800, {
        margin: true
    });
});
