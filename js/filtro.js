let campoBuscar = document.querySelector('#campo-busca');

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let valorImput = this.value.toLowerCase();

    let expNome = new RegExp (`\\D`, 'g').test(valorImput);

    let expTelefone = new RegExp (`\\d`, 'g').test(valorImput);
  
    let usuariosFiltrados;

    if(expNome){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.nome.toLowerCase().startsWith(valorImput));
     
      let tabelaAntiga = getElementByClassName(".info-nome");
      tabelaAntiga.remove();
      criaTabela(usuariosFiltrados);
      
    }
    
    if(expTelefone){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.telefone.toString().startsWith(valorImput));
        
      criaTabela(usuariosFiltrados);
        
    }

  }  
  else {
    criaTabela(pessoas);  
  }

})
