//Função de Busca e Filtragem da Informação
function search() {
    //Atribuindo Informação do Input para Váriável e Realizando Transformação do Valor
    let search = document.getElementById('input')
    search = search.value.toLowerCase()

    //Atribuindo Classe das Linhas a uma Váriavel
    let listItems = document.getElementsByClassName('list');

    let indice = [];

    //Estrutura de Repetição
    for (let i = 0; i < listItems.length; i++) {
        //Atribuindo Indice de ListItems
        let listItem = listItems[i];
        //Atribuindo Indice de Telefonia
        let unidade = telefonia[i].filter;
        //Realizando Busca na Lista de Contatos
        let posicao = unidade.indexOf(search);

        //Verificação e Atribuição de CSS        
        listItem.style.opacity = "1"; //Atribuindo Opacidade 100%

        if (search !== "") {
            if (posicao !== -1) {                
                listItem.style.display = "";
                indice.push(telefonia[i].filter)
            } else {                             
                listItem.style.opacity = "0";
                setTimeout(function () {                     
                    listItem.style.display = "none";  
                },500)
                let splice = indice.indexOf(telefonia[i].filter);
                indice.slice(splice);
            }
        } else {            
            listItem.style.display = "";
        }
    }

    if (indice.length < 1) {
        setTimeout(function () {
            document.querySelector('#indice').classList.remove('hidden')
        },550)
    } else {     
        document.querySelector('#indice').classList.add('hidden')
    }
}

