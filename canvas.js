var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(190,135,135)";
ctx.fillRect (20, 20, 200, 100);  // Rotes Viereck mit Ursprung (20,20)
ctx.fillStyle = "rgba(135,190,135,0.5)";
ctx.fillRect (80, 60, 300, 100);  // Grünes Viereck mit Ursprung (80,60)