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

// Define as coordenadas do retângulo e o tamanho
const x = 200;      // Coordenada x do canto superior esquerdo
const y = 150;      // Coordenada y do canto superior esquerdo
const width = 280; // Largura do retângulo
const height = 180; // Altura do retângulo

// Desenha o retângulo
ctx.rect(x, y, width, height);

ctx.fillStyle = "#00FF00"; // Vermelho
ctx.fill(); // Preenche o retângulo

ctx.beginPath();

// Define o centro e o tamanho do losango
const centerX = 340;
const centerY = 239;
const size = 90; // Distância do centro até os vértices

// Calcula os quatro vértices do losango
const topX = centerX;
const topY = centerY - size;

const rightX = centerX + size;
const rightY = centerY;

const bottomX = centerX;
const bottomY = centerY + size;

const leftX = centerX - size;
const leftY = centerY;

// Desenha o losango
ctx.moveTo(topX, topY); // Move para o vértice superior
ctx.lineTo(rightX, rightY); // Linha para o vértice direito
ctx.lineTo(bottomX, bottomY); // Linha para o vértice inferior
ctx.lineTo(leftX, leftY); // Linha para o vértice esquerdo
ctx.closePath(); // Fecha o caminho conectando ao vértice inicial

// Define a cor de preenchimento
ctx.fillStyle = "#FFFF00"; 
ctx.fill(); 

// Finaliza o caminho
ctx.closePath();

ctx.beginPath();
ctx.arc(340, 240, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.closePath();