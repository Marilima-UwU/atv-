// pacote "http" -> requisições e respostas do usuário
const http = require("http");

// cria o servidor 
const server = http.createServer((requisicao, resposta) => {
  // configurando a resposta como se fosse uma página HTML
  resposta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });


  const url = requisicao.url;


  if (requisicao.method === "GET") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>frutas</h1>");
  } else if (requisicao.method === "POST") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>fruta adicionada </h1>");
  } else if (requisicao.method === "PUT") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>fruta modificada </h1>");
  } else if (requisicao.method === "DELETE") {
    // responde com uma mensagem em HTML
    resposta.write("<h1>fruta removida</h1>");
  }

  // finaliza a resposta
  resposta.end();
});

// Vai abrir o site.
server.listen(3000, console.log("Servidor rodando...."));