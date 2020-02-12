
$(document).on("click", ".btn", function() {
    let x = $('#calculator #display').html();
    let y = $(this).html();
    if (x === "ERROR") {
        $('#calculator #display').val(y);
    } else {
        if (x.length >= 15) {
            $('#calculator #display').val(x.slice(1, x.length) + y);

        } else {
            $('#calculator #display').val($('#calculator #display').val() + y);
        }
    }
})

$(document).on("click", "#math", function() {
    let x = $('#calculator #display').val();
    try {
        $('#calculator #display').val(eval(x));
        $('#calculator #history').html(x + "=");

    } catch {
        $('#calculator #display').val("ERROR");
    }
})

$(document).on("click", "#clear", function() {
    $('#calculator #display').val("");
})

/*
<td colspan=5><input type="text" id="display" minlength="0" maxlength="50" style="width: 100%; height: 100%;"></td>
*/


$(document).on("click", "#back", function() {
    let x = $('#calculator #display').val();
    $('#calculator #display').val(x.slice(0, x.length - 1));
})

/*
$(document).on("click","#calculator tbody tr td button.btn", function() { // any button
    console.log($(this).html());
    });
    */