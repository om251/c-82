var mouseEvent="empty";
var last_pos_x, last_pos_y;

canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color= "black";
width= 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUp";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;
                                            
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last_pos_x_and_y_cor= ");
        console.log("x=" + last_pos_x +"y =" + last_pos_y);
        ctx.moveTo(last_pos_x,last_pos_y);

        console.log("current_pos_x_and_y_cor= ");
        console.log("x=" + current_pos_x +"y =" + current_pos_y);
        ctx.lineTo(current_pos_x,current_pos_y);
        ctx.stroke();
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}

function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

