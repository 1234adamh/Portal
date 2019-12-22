var hero;
function startGame(){
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
document.body.insertBefore(this,canvas, dovumentbody.childNodes[0]);
    }
}
var ctx = c.getContext("2d");
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 68) {
        alert('Right was pressed');
    }
});
