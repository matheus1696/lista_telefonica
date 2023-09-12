function search() {
    let search = document.getElementById('input')
    search = search.value.toLowerCase()

    let listItems = document.getElementsByClassName('list');

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        let unidade = telefonia[i].ft_unidade.toLowerCase();
        let posicao = unidade.indexOf(search);        

        if (search !== "") {
            if (posicao !== -1) {
                listItem.style.display = "";
            } else {
                listItem.style.display = "none";
            }
        } else {            
            listItem.style.display = "";
        }
    }
}