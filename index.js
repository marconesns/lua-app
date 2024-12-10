const express = require('express');
const app = express();
const port = 3000;

// Rota padrão para a página inicial
app.get('/', (req, res) => {
  // Renderiza uma página HTML simples com o fundo e a imagem
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lua App</title>
      <style>
        body {
          background-color: blue; /* Inicialmente, fundo azul */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        img {
          width: 200px;
        }
      </style>
    </head>
    <body>
      <img src="lua.png" alt="Lua">
    </body>
    </html>
  `);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});