var produtos = [
    {
        id: 1,
        nome: "coca cola lata 350ml",
        valor: 7.00,
        quantidaEstoque: 600,
        img: "imgs/coca-cola.jpg"
    },
    {
        id: 2,
        nome: "feijao camil 1kg",
        valor: 8.00,
        quantidaEstoque: 250,
        img: "imgs/feijao-camil-1kg.jpg"
    },
    {
        id: 3,
        nome: "play 5 1tb",
        valor: 7000.00,
        quantidaEstoque: 600,
        img: "imgs/ps5.jpg"
    },
    {
        id: 4,
        nome: "xbox one 1tb",
        valor: 2500.00,
        quantidaEstoque: 100,
        img: "imgs/xbox-one.jpg"
    },
    {
        id: 5,
        nome: "samsung galaxy A31s 128gb ",
        valor: 1500.00,
        quantidaEstoque: 120,
        img: "imgs/galaxy-a31s.jpg"
    },

];

var produto;
function vizualizaProduto(el) {
    produto = produtos.find(p => p.id == el.value)
    console.log(produto);
    var img = document.getElementsByTagName('img')[0];
    img.src = produto.img;
    var h3 = document.getElementsByTagName('h3')[0];
    h3.textContent = produto.nome;
    var valor = document.getElementsByName('valor')[0];
    valor.textContent = produto.valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function inserirProduto(event) {
    console.log(event.keyCode)
    var f2 = 113;
    var f9 = 120;
    var f10 = 121;
    if (event.keyCode == f2) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td.textContent = produto.id;
        td2.textContent = produto.nome;
        tr.appendChild(td);
        tr.appendChild(td2);
        document.getElementsByTagName("tbody")[0].appendChild(tr);

        var quantidade = document.getElementsByClassName("quantidade")[0].value;
        td3.textContent = quantidade;
        tr.appendChild(td3); 

        var totalProduto = produto.valor * quantidade;
        td4.textContent = totalProduto.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        tr.appendChild(td4); 
        

    }
    if (event.keyCode == f10) {
        window.close();
    }
    if (event.keyCode == f9) {
    }
}

window.onload = function () {
    for (let index = 0; index < produtos.length; index++) {
        var option = document.createElement("option")
        option.value = produtos[index].id;
        option.textContent = produtos[index].nome;
        document.getElementsByTagName('select')[0].appendChild(option)

    }
    document.addEventListener("keyup", inserirProduto)
}