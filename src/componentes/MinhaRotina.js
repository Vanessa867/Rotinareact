
import React from 'react';


function MinhaRotina() {
  return (
    <html>
      <head>
        <title>Minha Rotina</title>
      </head>
      <body>
        <h1>Minha Rotina Diária</h1>
        <h2><strong>Vanessa Lins</strong></h2>
        <img src="https://christianosantos.com/files/cs1/avatar-mulher.jpg" alt="" />
        <p>
          Minha rotina começa quando acordo por volta das 8 horas da manhã, tomo meu café com leite enquanto<br/>
           <strong>assisto o dorama vincenzo</strong>, após isso vou fazer serviços pessoais. pela tarde tenho o <br/>
           costumo estudar programação e ux e ui design, pela noite vou para faculdade e minha rotina acaba  quando <br/>
           vou dormir apos chegar em casa por volta das 23 horas da noite.
        </p>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>"Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro." ~Clarice Lispector</p>
        <audio src="https://christianosantos.com/files/cs1/musica03.mp3" autoPlay loop />
      </body>
    </html>
  );
}

export default MinhaRotina;
