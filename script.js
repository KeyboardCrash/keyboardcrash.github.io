
$(document).on("click", ".btn", function() {
    let x = $('#calculator #display').html();
    let y = $(this).html();
    if (x === "ERROR") {
        $('#calculator #display').html(y);
    } else {
        $('#calculator #display').html($('#calculator #display').html() + y);
    }
})

$(document).on("click", "#math", function() {
    let x = $('#calculator #display').html();
    try {
        $('#calculator #display').html(eval(x));
        $('#calculator #history').html(x);

    } catch {
        $('#calculator #display').html("ERROR");
    }
})

$(document).on("click", "#clear", function() {
    $('#calculator #display').html("");
})

$(document).on("click", "#back", function() {
    let x = $('#calculator #display').html();
    $('#calculator #display').html(x.slice(0, x.length - 1));
})

/*
$(document).on("click","#calculator tbody tr td button.btn", function() { // any button
    console.log($(this).html());
    });
    */