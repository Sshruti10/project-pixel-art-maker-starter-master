// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height,width;
    height= $("#input_height").val();
    width= $("#input_width").val();
    var i,j;
    for(i=1;i<=height;i++) {
        $("table").append("<tr></tr>");
        for(j=1;j<=width;j++){
            $("tr").last().append("<td></td>");
        }
    }
}

function colorSet() {
    var picker;
    picker= $("#colorPicker").val();
}


$(document).ready(function(){
    $("#submitted").click(makeGrid());
});


