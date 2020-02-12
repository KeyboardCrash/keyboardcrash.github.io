
// When a click is detected for btn classes
$(document).on("click", ".btn", function() {
    // Take the contents of the display box
    let x = $('#calculator #display').html();
    // Take the key pressed
    let y = $(this).html();

    // If we push a new button, we want to insert the value over ERROR instead of appending to ERROR
    if (x === "ERROR") {
        $('#calculator #display').val(y);
    } else {
        // Limit character count to 50 - eval shouldn't even evaluate this many digits
        if (x.length >= 50) {
            // Cut off the oldest value and append the newest if it is exceeded - shouldn't be exceeded
            $('#calculator #display').val(x.slice(1, x.length) + y);
        } else {
            // Set the new value of the display field with appeneded value
            $('#calculator #display').val($('#calculator #display').val() + y);

        }
    }
})

// When click detected on math button (equals sign)
$(document).on("click", "#math", function() {
    // Take the value in display
    let x = $('#calculator #display').val();
    try {
        // Calculate it and set the history
        $('#calculator #display').val(eval(x));
        $('#calculator #history').html(x + "=");

    } catch {
        // If there's an issue with eval, it'll shoot out ERROR
        $('#calculator #display').val("ERROR");
    }
})

// When click detected on clear
$(document).on("click", "#clear", function() {
    // Remove everything in display
    $('#calculator #display').val("");
})

// When click detected on back button (CE)
$(document).on("click", "#back", function() {
    let x = $('#calculator #display').val();
    // Slice from first to last-1 value
    $('#calculator #display').val(x.slice(0, x.length - 1));
})

// Debug
/*
$(document).on("click","#calculator tbody tr td button.btn", function() { // any button
    console.log($(this).html());
    });
    */