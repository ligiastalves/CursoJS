function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora <12){
        //Bom dia
        img.src = 'img/manha.jpg';
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'img/tarde.jpg';
    }else{
        //boa noite
        img.src = 'img/noite.jpg';
    }
}