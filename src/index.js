const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Versão 1.0.4 - Correção aplicada com sucesso! 🛠️',
    timestamp: new Date()
  });
});

const server = app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

// Graceful Shutdown: Garante que o container pare corretamente
process.on('SIGTERM', () => {
  console.log('Sinal SIGTERM recebido: fechando servidor HTTP');
  server.close(() => {
    console.log('Servidor HTTP fechado');
  });
});