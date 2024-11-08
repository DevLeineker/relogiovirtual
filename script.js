
function carregar() {
   var msg = document.getElementById('msg');
   var imagem = document.getElementById('imagem');
   var body = document.body; // Referência ao corpo da página
   var data = new Date();
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`;

   if (hora >= 6 && hora < 12) {    // BOM DIA
       imagem.src = 'foto.manhã.m.png';
       body.style.backgroundImage = 'url(wallmanha.jpg)'; // Imagem de fundo para manhã
   } else if (hora >= 12 && hora < 19) { // BOA TARDE
       imagem.src = 'foto.tarde.m.png';
       body.style.backgroundImage = 'url(walltarde.jpg)'; // Imagem de fundo para tarde
   } else {  // BOA NOITE
       imagem.src = 'foto.noite.m.png';
       body.style.backgroundImage = 'url(wallnoite.jpg)'; // Imagem de fundo para noite
   }
}


