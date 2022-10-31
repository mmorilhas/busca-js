let pessoas =[
    {nome: 'Victor', telefone: 21935484773},
    {nome: 'Michelle', telefone: 11974450073},
    {nome: 'Augusto', telefone: 11979984073},
    {nome: 'José', telefone: 11954454075},
    {nome: 'Valter', telefone: 11977458473},
    {nome: 'Joana', telefone: 11944488576},
    {nome: 'Rodrigo', telefone: 11873484973},
    {nome: 'Renata', telefone: 11975584073}
];

let tabela = document.querySelector('#tabela-usuarios');


window.onload = criaTabela(pessoas);
    
function criaTabela(listaPessoas){
    listaPessoas.forEach((pessoa) => {
        
        let tr = document.createElement("tr");
        tr.classList.add('usuario');

        let tdNome = document.createElement("td");
        tdNome.classList.add('info-nome');
        
        let tdTelefone = document.createElement("td");
        tdTelefone.classList.add('info-telefone');

        tdNome.textContent = pessoa.nome;
        tdTelefone.textContent = pessoa.telefone;

        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);

        tabela.appendChild(tr);
        
    })
}
