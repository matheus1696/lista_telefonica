let telefonia = [] //Variável de Listagem dos Contatos Externos

//Função de Captura da lista
function loadPost() {

    //Conexão com API
    fetch('http://10.101.10.96/api/contact') //URL da API do Sistema GEST360
        //Retorno da API
        .then(function(contatos){
            return contatos.json()
        }).then(function(json) {
                //Ordenando Alfabeticamente A->Z
                json.sort(function(a,b) {
                    return a.no_unidade < b.no_unidade ? -1 : a.no_unidade > b.no_unidade ? 1 : 0;
                });
            for (let i = 0; i < json.length; i++) {
                //Verificação dos Contatos Principais da Unidade
                if (json[i].con_principal == "Principal") {
                    //Exibindo em tela
                    tbody = document.querySelector('tbody');
                    tbody.innerHTML +=`<tr class="list"><td>${json[i].no_unidade}</td><td>${json[i].con_unidade}</td></tr>`
                    
                    //Atribuindo Contato na Váriavel
                    telefonia.push(json[i])
                }           
            }          
        })
        .catch(function(error) {
            console.log(error)
        })
}