function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (nome == "")
        alert("Favor informar o nome do produto")
    else if (codigo == "")
        alert("Favor informar o códio do produto")
    else if (qtidade == "")
        alert("Favor informar a quantidade de produtos")
    else cadastrarProduto(nome, codigo, parseInt(qtidade));
}

function validarClientes(idNomeClientes, idMailClientes) {
    let nomec = document.getElementById(idNomeClientes).value;
    let mail = document.getElementById(idMailClientes).value;

    if (nomec == "")
        alert("Favor informar o nome do cliente")
    else if (mail == "")
        alert("Favor informar o e-mail do cliente")
    else cadastrarClientes(nomec, mail);
}

function cadastrarProduto(produto, codig, qtidade) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; 
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); 
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function cadastrarClientes(nomec, mail) {
    let novoCliente = {nome:nomec, email:mail};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; 
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); 
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("Cliente "+ nomec+" cadastrado com sucesso!!");
        atualizarTotalClientes("totalClientes");
        location.reload();
    } 
    else alert("Atualize seu navegador");
}


function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}

function atualizarTotalClientes(idCamp) {
    localStorage.setItem("totalClientes",++document.getElementById(idCamp).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("Atualize seu navegador");
}

function carregarTotalClientes(idCamp) {
    if (typeof(Storage) !== "undefined") {
        let totalClientes = localStorage.getItem("totalClientes");
        if (totalClientes == null) totalClientes = 0;
        document.getElementById(idCamp).innerHTML = totalClientes;
    }
    else alert("Atualize seu navegador");
}


function listarClientes() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Clientes:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há clientes cadastrados</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(clientes => {
                document.write("<ul>");
                document.write("<li>Nome do cliente: "+clientes.nome+"</li>");
                document.write("<li>E-mail do cliente: "+clientes.email+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("Atualize seu navegador");    
}

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("Atualize seu navegador");    
}