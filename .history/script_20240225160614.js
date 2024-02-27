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
 function updateGameStatus(){
    if(upPressed && rightPadleY > 0){
        rightPadleY -= padleSpeed
    }
    else if(downPressed && rightPadleY + padleHeight < canvas.height){
        rightPadleY += padleSpeed;
    }
    if(wPressed && leftPadleY > 0){
        leftPadleY -= padleSpeed;
    }
    else if(sPressed && leftPadleY + padleHeight < canvas.height){
        leftPadleY += padleSpeed;
    }
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if(ballY - ballRadius < 0 || ballY + ballRadius > canvas.height){
        ballSpeedY = -ballSpeedY;
    }
    if(ballX - ballRadius < padleWidth && ballY > leftPadleY && ballY < leftPadleY + padleHeight){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX + ballRadius > canvas.width - padleWidth && ballY > rightPadleY && ballY < rightPadleY + padleHeight){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        rightPlayerScore++;
        reset();
    }
    else if(ballX > canvas.width){
        leftPlayerScore++;
        reset();
    }
    if(leftPlayerScore === maxScore){
        alert("First player is win!Congratulation!");
    }
    else if(rightPlayerScore === maxScore){
        alert("Twice player is win!Congratulation!");
    }
 }

 function reset(){
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = Math.random() * 10 - 5;
 }
 

 function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#00468b';
    ctx.font = '16px Arial';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    
    ctx.fillRect(0,leftPadleY,padleWidth,padleHeight);
    ctx.fillRect(canvas.width - padleWidth,rightPadleY,padleWidth,padleHeight);
    ctx.fillText("Score:"+leftPlayerScore,10,20);
    ctx.fillText("Score:"+rightPlayerScore,canvas.width - 70,15);
 }

 function loop(){
    update();
    draw();
    animationId = requestAnimationFrame(loop);
 }
 


 