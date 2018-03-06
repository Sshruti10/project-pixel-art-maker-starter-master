// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height,width;
    height= $("#input_height").val();
    width= $("#input_width").val();
    $("#pixel_canvas").children().remove();
    for(var i=1;i<=height;i++) {
        $("table").append("<tr></tr>");
        for(var j=1;j<=width;j++){
            $("tr").last().append("<td></td>");
        }
    }
   var cell = $("table").find("td");
    cell.click(function() {
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });
}




$(document).ready(function(){
    $("#submitted").click(function(){ 
        makeGrid();
        return false; 
    });
});


