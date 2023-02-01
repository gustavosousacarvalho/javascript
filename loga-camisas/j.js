const itens = [
    {
        id : 0,
        nome : 'camisa de time',
        valor : 259.99,
        imagem : 'https://imgcentauro-a.akamaihd.net/900x900/M0EYOY60/camisa-do-flamengo-i-21-22-torcedor-adidas-masculina-img.jpg',
        quantidade: 0,
    },
    {
        id : 1,
        nome : 'short',
        valor : 129.99,
        imagem : 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/98f0dbebd4014f618032ae3c01737fe8_9366/shorts-1-cr-flamengo-22-23.jpg',
        quantidade: 0,
    },
    {
        id : 2,
        nome : 'chuteira',
        valor : 199.90,
        imagem : 'https://imgcentauro-a.akamaihd.net/600x600/96051819/chuteira-society-adidas-deportivo-tf-adulto-img.jpg',
        quantidade : 0,
    }
]

window.onload = function(){
    for (let index = 0; index < itens.length; index++) {
    var img = document.createElement("img");
    img.title = itens[index].nome + " " + itens[index].ano + " quilometragem: " + itens[index].quilometragem + " preço: " + itens[index].preço;
    img.src = itens[index].imagem;
    document.body.appendChild(img);

}
}