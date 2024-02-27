var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var startBtn = document.getElementById("start-btn");
var pauseBtn = document.getElementById("pause-btn");
var restartBtn = document.getElementById("restart-btn");
var isGameRunning = false;
var animationId;
startBtn.addEventListener("click",function(){
if(!isGameRunning){
    isGameRunning = true;
    loop();
}
})
pauseBtn.addEventListener("click",function(){
    isGameRunning = false;
    cancelAnimationFrame(animationId);
})
restartBtn.addEventListener("click",function(){
    document.location.reload;
})
 addEventListener("load",(event)=>{
draw();
 })
 let ballRadius = 10;
 let ballX = canvas.width / 2;
 let ballY = canvas.height / 2;
 let ballSpeedX = 5;
 let ballSpeedY = 5;
 let padleHeight = 90;
 let padleWidth = 15;
 let leftPadleY = canvas.height / 2 - padleHeight / 2;
 let rightPadleY = canvas.height / 2 - padleHeight / 2;
 let padleSpeed = 5;
 let leftPlayerScore = 0;
 let rightPlayerScore = 0;
 let maxScore = 10;

 document.addEventListener("keydown",keyDownHandler);
 document.addEventListener("keyup",keyUpHandler);

 let upPressed = false;
 let downPressed = false;
 let wPressed = false;
 let sPressed = false;
 function keyDownHandler(e){
    if(e.key === "ArrowUp"){
        upPressed = true;
    }
    else if(e.key === "ArrowDown"){
        downPressed = true;
    }
    else if(e.key === "w"){
        wPressed = true;
    }
    else if(e.key === "s"){
        sPressed = true;
    }
 }
 function keyUpHandler(e){
    if(e.key === "ArrowUp"){
        upPressed = false;
    }
    else if(e.key === "ArrowDown"){
        downPressed = false;
    }
    else if(e.key === "w"){
        wPressed = false;
    }
    else if(e.key === "s"){
        sPressed = false;
    }
 }
 
 