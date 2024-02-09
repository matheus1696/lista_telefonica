/*Variável de Listagem dos Contatos Externos
let telefonia = [
    {no_unidade: "0800 Marcação de Consultas",ft_unidade: "0800 marcacao de consultas",con_unidade: "0800 281 7080"},
    {no_unidade: "0800 Ouvidoria",ft_unidade: "0800 ouvidoria",con_unidade: "0800 281 2080"},
    {no_unidade: "AME Caiuca",ft_unidade: "ame caiuca",con_unidade: "(81) 3101-0351"},	
    {no_unidade: "AME Diagnostico",ft_unidade: "ame diagnostico",con_unidade: "(81) 3101-0356"},	
    {no_unidade: "AME Fernando Lyra",ft_unidade: "ame fernando lyra",con_unidade: "(81) 3101-0405"},	
    {no_unidade: "AME Infantojuvenil",ft_unidade: "ame infantojuvenil",con_unidade: "(81) 3101-0354"},	
    {no_unidade: "AME Luiz Bezerra Torres",ft_unidade: "ame luiz bezerra torres",con_unidade: "(81) 3101-0409"},	
    {no_unidade: "AME Maria Lira Morada Nova Rendeiras",ft_unidade: "ame maria lira morada nova rendeiras",con_unidade: "(81) 3101-0274"},	
    {no_unidade: "AME Pedro Justino Rodrigues UBS Kennedy II Padre Inacio",ft_unidade: "ame pedro justino rodrigues ubs kennedy ii padre inacio",con_unidade: "(81) 3101-0390"},
    {no_unidade: "AME Saúde da Mulher",ft_unidade: "ame saúde da mulher",con_unidade: "(81) 3101-0360"},	
    {no_unidade: "AME Saúde do Idoso",ft_unidade: "ame saúde do idoso",con_unidade: "(81) 3101-0366"},	
    {no_unidade: "CAF - Central de Abastecimento Farmaceutico de Caruaru",ft_unidade: "caf - central de abastecimento farmaceutico de caruaru",con_unidade: "(81) 3101-0207"},	
    {no_unidade: "CAPS AD III Mandacaru",ft_unidade: "caps ad iii mandacaru",con_unidade: "(81) 3101-0368"},	
    {no_unidade: "CAPS Crescendo Com Dignidade",ft_unidade: "caps crescendo com dignidade",con_unidade: "(81) 3101-0369"},	
    {no_unidade: "Centro de Saúde Amelia de Pontes",ft_unidade: "centro de saúde amelia de pontes",con_unidade: "(81) 3101-0384"},	
    {no_unidade: "Centro de Saúde Ana Rodrigues",ft_unidade: "centro de saúde ana rodrigues",con_unidade: "(81) 3101-0382"},	
    {no_unidade: "Centro de Saúde Boa Vista",ft_unidade: "centro de saúde boa vista",con_unidade: "(81) 3101-0378"},	
    {no_unidade: "Centro de Saúde Cedro",ft_unidade: "c s cedro",con_unidade: "(81) 3101-0380"},	
    {no_unidade: "Centro de Saúde Indianopolis",ft_unidade: "centro de saúde indianopolis",con_unidade: "(81) 3101-0358"},	
    {no_unidade: "Centro de Zoonoses de Caruaru",ft_unidade: "centro de zoonoses de caruaru",con_unidade: "(81) 3101-0417"},	
    {no_unidade: "CEO - Centro de Especialidades Odontológicas Municipal",ft_unidade: "ceo - centro de especializades odontológicas municipal",con_unidade: "(81) 3101-0375"},	
    {no_unidade: "CEREST - Centro de Referencia de Saúde do Trabalhador",ft_unidade: "cerest - centro de referencia de saúde do trabalhador",con_unidade: "(81) 3101-0374"},	
    {no_unidade: "COAS/CTA Centro de Testagem e Aconselhamento",ft_unidade: "coas/cta centro de testagem e aconselhamento",con_unidade: "(81) 3101-0373"},	
    {no_unidade: "EAP Sao Francisco I e II",ft_unidade: "eap sao francisco i e ii",con_unidade: "(81) 3101-0345"},	
    {no_unidade: "Farmacia Caruaru Sao Francisco I",ft_unidade: "farmacia caruaru sao francisco i",con_unidade: "(81) 3101-0376"},	
    {no_unidade: "Hospital Municipal de Caruaru Dr Manoel Afonso Porto Neto",ft_unidade: "hospital municipal de caruaru dr manoel afonso porto neto",con_unidade: "(81) 3101-0306"},	
    {no_unidade: "Laboratorio Central",ft_unidade: "laboratorio central",con_unidade: "(81) 3101-0372"},	
    {no_unidade: "LACIAN - Laboratorio de Cito e Anatomopatologia",ft_unidade: "lacian - laboratorio de cito e anatomopatologia",con_unidade: "(81) 3101-0371"},	
    {no_unidade: "Maternidade Santa Dulce dos Pobres",ft_unidade: "maternidade santa dulce dos pobres",con_unidade: "(81) 3101-0326"},	
    {no_unidade: "Regulação - Central de Regulacao de Assistencia a Saúde",ft_unidade: "central de regulacao de assistencia a saúde",con_unidade: "(81) 3101-0346"},	
    {no_unidade: "Secretaria de Saúde de Caruaru",ft_unidade: "secretaria de saúde de caruaru",con_unidade: "(81) 3101-0201"},	
    {no_unidade: "UBS Agamenon Magalhaes I e Encanto da Serra",ft_unidade: "ubs agamenon magalhaes i e encanto da serra",con_unidade: "(81) 3101-0422"},	
    {no_unidade: "UBS Agamenon Magalhaes II",ft_unidade: "ubs agamenon magalhaes ii",con_unidade: "(81) 3101-0402"},	
    {no_unidade: "UBS Alto do Moura",ft_unidade: "ubs alto do moura",con_unidade: "(81) 3101-0410"},	
    {no_unidade: "UBS Barra de Taquara",ft_unidade: "ubs barra de taquara",con_unidade: "(81) 3101-0429"},	
    {no_unidade: "UBS Cachoeira Seca",ft_unidade: "ubs cachoeira seca",con_unidade: "(81) 3101-0414"},	
    {no_unidade: "UBS Caic",ft_unidade: "ubs caic",con_unidade: "(81) 3101-0357"},	
    {no_unidade: "UBS Caiuca I",ft_unidade: "ubs caiuca i",con_unidade: "(81) 3101-0393"},	
    {no_unidade: "UBS Caiuca II",ft_unidade: "ubs caiuca ii",con_unidade: "(81) 3101-0415"},	
    {no_unidade: "UBS Caja",ft_unidade: "ubs caja",con_unidade: "(81) 3101-0413"},	
    {no_unidade: "UBS Canaa",ft_unidade: "ubs canaa",con_unidade: "(81) 3101-0408"},	
    {no_unidade: "UBS Centenario",ft_unidade: "ubs centenario",con_unidade: "(81) 3101-0365"},	
    {no_unidade: "UBS Cidade Jardim I e II",ft_unidade: "ubs cidade jardim i e ii",con_unidade: "(81) 3101-0396"},	
    {no_unidade: "UBS Cipo",ft_unidade: "ubs cipo",con_unidade: "(81) 3101-0427"},	
    {no_unidade: "UBS Gonçalves Ferreira",ft_unidade: "ubs gonçalves ferreira",con_unidade: "(81) 3101-0267"},	
    {no_unidade: "UBS Indianopolis I e II",ft_unidade: "ubs indianopolis i e ii",con_unidade: "(81) 3101-0407"},	
    {no_unidade: "UBS Itauna",ft_unidade: "ubs itauna",con_unidade: "(81) 3101-0401"},	
    {no_unidade: "UBS Jardim Liberdade",ft_unidade: "ubs jardim liberdade",con_unidade: "(81) 3101-0399"},	
    {no_unidade: "UBS Jardim Panorama I",ft_unidade: "ubs jardim panorama i",con_unidade: "(81) 3101-0272"},	
    {no_unidade: "UBS Joao Mota",ft_unidade: "ubs joao mota",con_unidade: "(81) 3101-0386"},	
    {no_unidade: "UBS Jose Carlos de Oliveira I",ft_unidade: "ubs jose carlos de oliveira i",con_unidade: "(81) 3101-0412"},	
    {no_unidade: "UBS Jose Carlos de Oliveira II e III",ft_unidade: "ubs jose carlos de oliveira ii e iii",con_unidade: "(81) 3101-0428"},	
    {no_unidade: "UBS Jose Liberato I",ft_unidade: "ubs jose liberato i",con_unidade: "(81) 3101-0268"},	
    {no_unidade: "UBS Jose Liberato II",ft_unidade: "ubs jose liberato ii",con_unidade: "(81) 3101-0275"},	
    {no_unidade: "UBS Jua",ft_unidade: "ubs jua",con_unidade: "(81) 3101-0420"},	
    {no_unidade: "UBS Lagoa de Pedra",ft_unidade: "ubs lagoa de pedra",con_unidade: "(81) 3101-0323"},	
    {no_unidade: "UBS Lajes",ft_unidade: "ubs lajes",con_unidade: "(81) 3101-0404"},	
    {no_unidade: "UBS Malhada de Barreiras Queimadas",ft_unidade: "ubs malhada de barreiras queimadas",con_unidade: "(81) 3101-0419"},	
    {no_unidade: "UBS Maria Auxiliadora I e II",ft_unidade: "ubs maria auxiliadora i e ii",con_unidade: "(81) 3101-0377"},	
    {no_unidade: "UBS Morro Centenario",ft_unidade: "ubs morro centenario",con_unidade: "(81) 3101-0392"},	
    {no_unidade: "UBS Morro São Francisco",ft_unidade: "ubs morro são francisco",con_unidade: "(81) 3101-0392"},	
    {no_unidade: "UBS Murici",ft_unidade: "ubs murici",con_unidade: "(81) 3101-0426"},	
    {no_unidade: "UBS Nova Caruaru",ft_unidade: "ubs nova caruaru",con_unidade: "(81) 3101-0387"},	
    {no_unidade: "UBS Novo Mundo e Demostenes Veras",ft_unidade: "ubs novo mundo e demostenes veras",con_unidade: "(81) 3101-0389"},	
    {no_unidade: "UBS Pau Santo",ft_unidade: "ubs pau santo",con_unidade: "(81) 3101-0271"},	
    {no_unidade: "UBS Peladas",ft_unidade: "ubs peladas",con_unidade: "(81) 3101-0411"},	
    {no_unidade: "UBS Rafael",ft_unidade: "ubs rafael",con_unidade: "(81) 3101-0416"},	
    {no_unidade: "UBS Rendeiras I",ft_unidade: "ubs rendeiras i",con_unidade: "(81) 3101-0273"},	
    {no_unidade: "UBS Residencial Alto do Moura",ft_unidade: "ubs residencial alto do moura",con_unidade: "(81) 3101-0421"},	
    {no_unidade: "UBS Riachão",ft_unidade: "ubs riachão",con_unidade: "(81) 3101-0270"},	
    {no_unidade: "UBS Riacho Doce",ft_unidade: "ubs riacho doce",con_unidade: "(81) 3101-0406"},	
    {no_unidade: "UBS Salgado I e II",ft_unidade: "ubs salgado i e ii",con_unidade: "(81) 3101-0395"},	
    {no_unidade: "UBS Salgado III",ft_unidade: "ubs salgado iii",con_unidade: "(81) 3101-0430"},	
    {no_unidade: "UBS Salgado IV",ft_unidade: "ubs salgado iv",con_unidade: "(81) 3101-0394"},	
    {no_unidade: "UBS Santa Rosa I",ft_unidade: "ubs santa rosa i",con_unidade: "(81) 3101-0400"},	
    {no_unidade: "UBS Santa Rosa II III e IV",ft_unidade: "ubs santa rosa ii iii e iv",con_unidade: "(81) 3101-0423"},	
    {no_unidade: "UBS Sao Joao da Escocia I III e IV",ft_unidade: "ubs sao joao da escocia i iii e iv",con_unidade: "(81) 3101-0388"},	
    {no_unidade: "UBS Serra Velha",ft_unidade: "ubs serra velha",con_unidade: "(81) 3101-0324"},	
    {no_unidade: "UBS Serranopolis",ft_unidade: "ubs serranopolis",con_unidade: "(81) 3101-0397"},	
    {no_unidade: "UBS Severino Afonso",ft_unidade: "ubs severino afonso",con_unidade: "(81) 3101-0391"},	
    {no_unidade: "UBS Sinhazinha I E II",ft_unidade: "ubs sinhazinha i e ii",con_unidade: "(81) 3101-0269"},	
    {no_unidade: "UBS Terra Vermelha",ft_unidade: "ubs terra vermelha",con_unidade: "(81) 3101-0418"},	
    {no_unidade: "UBS Vassoural I II e III",ft_unidade: "ubs vassoural i ii e iii",con_unidade: "(81) 3101-0425"},	
    {no_unidade: "UBS Vila Kennedy I",ft_unidade: "ubs vila kennedy i",con_unidade: "(81) 3101-0393"},	
    {no_unidade: "UBS Xicuru",ft_unidade: "ubs xicuru",con_unidade: "(81) 3101-0424"},	
    {no_unidade: "UBS Xique Xique I e II Dr Xisto Zeno Valones",ft_unidade: "ubs xique xique i e ii dr xisto zeno valones",con_unidade: "(81) 3101-0398"},	
    {no_unidade: "Unidade de Saúde Mental",ft_unidade: "unidade de saúde mental",con_unidade: "(81) 3101-0364"},	
    {no_unidade: "Unidade Municipal de Fisioterapia",ft_unidade: "unidade municipal de fisioterapia",con_unidade: "(81) 3101-0370"},	
    {no_unidade: "Unidade Municipal de Saúde Auditiva",ft_unidade: "unidade municipal de saúde auditiva",con_unidade: "(81) 3101-0362"},	
    {no_unidade: "Unidade Saúde Escola Dr Antonio Vieira",ft_unidade: "unidade saúde escola dr antonio vieira",con_unidade: "(81) 3101-0403"},	
    {no_unidade: "UPA Boa Vista Dr Amorim",ft_unidade: "upa boa vista dr amorim",con_unidade: "(81) 3101-0256"},	
    {no_unidade: "UPA Rendeiras Dr Jose Barreto",ft_unidade: "upa rendeiras dr jose barreto",con_unidade: "(81) 3101-0276"},	
    {no_unidade: "UPA Vassoural",ft_unidade: "upa vassoural",con_unidade: "(81) 3101-0286"},
] 

function loadPost() {
    for (let i = 0; i < telefonia.length; i++) {
        //Verificação dos Contatos Principais da Unidade
            //Exibindo em tela
            tbody = document.querySelector('tbody');
            tbody.innerHTML +=`<tr class="list"><td>${telefonia[i].no_unidade}</td><td>${telefonia[i].con_unidade}</td></tr>`          
    }
}
*/

let telefonia = [
    {title: "SAMU",filter: "samu",contact: "192"},
    {title: "0800 Marcação de Consultas",filter: "0800 marcacao de consultas",contact: "0800 281 7080"},
    {title: "0800 Ouvidoria",filter: "0800 ouvidoria",contact: "0800 281 2080"},
]

//Função de Captura da lista
    // API Apresentando falha por conta do HTTPS
    function loadPost() {

        //Conexão com API
        fetch('https://techsupport.saudecaruaru.pe.gov.br/api/contact') //URL da API do Sistema TechSupport
            //Retorno da API
            .then(function(contacts){
                return contacts.json()
            }).then(function(json) {
                    //Ordenando Alfabeticamente A->Z
                    json.sort(function(a,b) {
                        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
                    });
                for (let i = 0; i < json.length; i++) {
                    //Verificação dos Contatos Principais da Unidade
                    if (json[i].type_contact == "Main") {
                        //Atribuindo Contato na Váriavel
                        telefonia.push(json[i])
                    }
                }
            })
            .catch(function(error) {
                console.log(error)
            })
    }

function showContact() {
    setTimeout(function () {
        /*
            for (let i = 0; i < telefonia.length; i++) {
                    //Exibindo em tela
                    tbody = document.querySelector('tbody');
                    tbody.innerHTML += `<tr class="list"><td>${telefonia[i].title}</td><td>${telefonia[i].contact}</td></tr>`
            }
        */

        for (let i = 0; i < telefonia.length; i++) {
                //Exibindo em tela
                contacts = document.getElementById('contacts');
                contacts.innerHTML += `<div class="flex flex-col justify-center items-center bg-green-700 shadow-md rounded-md list"> <p> ${telefonia[i].title} </p> <p class="mt-5"> ${telefonia[i].contact} </p> </div>`;
        }
    },2000)
}


