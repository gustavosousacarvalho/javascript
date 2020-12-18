var produtos = [
    {
        id: 1,
        nome: "coca cola lata 350ml",
        valor: 7.00,
        quantidaEstoque: 60,
        img: "imgs/coca-cola.jpg"
    },
    {
        id: 2,
        nome: "feijao camil 1kg",
        valor: 8.00,
        quantidaEstoque: 25,
        img: "feijao-camil-1kg.jpg"
    },
    {
        id: 3,
        nome: "play 5 1tb",
        valor: 7000.00,
        quantidaEstoque: 6,
        img: "imgs/coca-cola.jpg"
    },
    {
        id: 4,
        nome: "xbox one 1tb",
        valor: 2500.00,
        quantidaEstoque: 10,
        img: "imgs/coca-cola.jpg"
    },
    {
        id: 5,
        nome: "samsung galaxy A31s 128gb ",
        valor: 1500.00,
        quantidaEstoque: 12,
        img: "imgs/coca-cola.jpg"
    },
   
];



window.onload = function () {
  for (let index = 0; index < produtos.length; index++) {
    var option = document.createElement("option")
    option.value = produtos[index].id;
    option.textContent = produtos[index].nome;
    document.getElementsByTagName('select')[0].appendChild(option)
      
  }
}