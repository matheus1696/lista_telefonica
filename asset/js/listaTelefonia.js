let telefonia = []

function loadPost() {
  fetch('http://10.101.10.96/api/contact')
      .then(function(resultado){
          return resultado.json()
      }).then(function(json) {
            json.sort(function(a,b) {
                return a.no_unidade < b.no_unidade ? -1 : a.no_unidade > b.no_unidade ? 1 : 0;
            });
          for (let i = 0; i < json.length; i++) {
            if (json[i].con_principal == "Principal") {
                tbody = document.querySelector('tbody');
                tbody.innerHTML +=`<tr class="list"><td>${json[i].no_unidade}</td><td>${json[i].con_unidade}</td></tr>`
                
                telefonia.push(json[i])
            }           
          }          
      })
      .catch(function(error) {
          console.log(error)
      })
}

console.log(telefonia)