var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#E57373";
ctx.fillRect(50, 200, 100, 100);

ctx.beginPath();
ctx.moveTo(50, 195);    
ctx.lineTo(100, 100);   
ctx.lineTo(150, 195);   
ctx.closePath();        
ctx.fillStyle = "#FFFF00";
ctx.fill();

ctx.beginPath();
ctx.arc(75, 227, 15, 0, 2 * Math.PI);
ctx.fillStyle = "#000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(125, 227, 15, 0, 2 * Math.PI);
ctx.fillStyle = "#000";
ctx.fill();
ctx.closePath();

ctx.beginPath();

ctx.arc(100, 250, 20, 0, Math.PI); 
ctx.lineTo(250, 250); 
ctx.closePath(); 

ctx.fillStyle = "#FFFFFF";
ctx.fill();

// Bandeira do Brasil!!!!

ctx.beginPath();


const x = 200;     
const y = 150;      
const width = 280; 
const height = 180; 


ctx.rect(x, y, width, height);

ctx.fillStyle = "#00FF00"; 
ctx.fill(); 

ctx.beginPath();


const centerX = 340;
const centerY = 239;
const size = 90; 

const topX = centerX;
const topY = centerY - size;

const rightX = centerX + size;
const rightY = centerY;

const bottomX = centerX;
const bottomY = centerY + size;

const leftX = centerX - size;
const leftY = centerY;

ctx.moveTo(topX, topY); 
ctx.lineTo(rightX, rightY); 
ctx.lineTo(bottomX, bottomY); 
ctx.lineTo(leftX, leftY); 
ctx.closePath(); 

ctx.fillStyle = "#FFFF00"; 
ctx.fill(); 

ctx.closePath();

ctx.beginPath();
ctx.arc(340, 240, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.closePath();

var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");

ctx1.beginPath();
ctx1.arc(130, 250, 120, 0, 2 * Math.PI);
ctx1.strokeStyle = "#000000";
ctx1.lineWidth = 5;
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.arc(130, 250, 100, 0, 2 * Math.PI);
ctx1.strokeStyle = "#000000";
ctx1.lineWidth = 5;
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.arc(130, 250, 80, 0, 2 * Math.PI);
ctx1.strokeStyle = "#000000";
ctx1.lineWidth = 5;
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.arc(130, 250, 60, 0, 2 * Math.PI);
ctx1.fillStyle = "#000";
ctx1.fill();
ctx1.closePath();