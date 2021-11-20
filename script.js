//Event handlers

//when mouse is down it will call draw function
function sketchpad_mouseDown() {
    mouseDown=1;    
    draw(ctx,mouseX,mouseY,12, false );
}

//when mouse is released it set's mousedown back to false
function sketchpad_mouseUp() {    
    mouseDown=0;
}

//it is activated when mouse is moved in either direction
//it get's current position of mouse from getMousePos(e)
//if mouseDown than call draw
function sketchpad_mouseMove(e) {
    getMousePos(e);
    if (mouseDown==1) {
        draw(ctx,mouseX,mouseY,12, true);
    }
}

//it finds current position of pointer
//when mouse event is triggered
//offset x,offset y return x,y cordinate of mouse
//layer x,layer y 
//return horizantak and vertical cordinates relative to current layer
function getMousePos(e) 
{    
    if (!e)        
      var e = event;     
    if (e.offsetX) {        
      mouseX = e.offsetX;        
      mouseY = e.offsetY;    
    }    
    else if (e.layerX) {        
      mouseX = e.layerX;        
      mouseY = e.layerY;    
    } 
}

//touch event handler

//it is activated when user touches the touchpad
//it calls draw func with false to note position not to draw
function sketchpad_touchStart() {     
    getTouchPos();    
    draw(ctx,touchX,touchY,12, false);    
    //this prevents scrolling of screen when user draws
    event.preventDefault();
}


//it is activated when user drags in sketchpad
//it calls draw with true flag to enable drawing

function sketchpad_touchMove(e) {     
    getTouchPos(e);    
    draw(ctx,touchX,touchY,12, true);    
    event.preventDefault();
}

//it is used to find point in the sketchpad where user has
//touched

function getTouchPos(e) {    
    if (!e)        
    var e = event;     
    if(e.touches) {   
        //it length is used to find  
        //how many fingers has touched    
      if (e.touches.length == 1) {            
        var touch = e.touches[0];            
        touchX=touch.pageX-touch.target.offsetLeft;               
        touchY=touch.pageY-touch.target.offsetTop;        
      }
    }
}

//clearing the sketchpad
//on click of clear button it fills backg with black color

document.getElementById('clear_button').addEventListener("click",  
                                             function(){  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});