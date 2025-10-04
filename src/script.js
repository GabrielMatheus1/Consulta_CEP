async function buscarCep() {
    
    let inputValue = document.getElementById('cep').value;
    let resultado = document.getElementById('result');

    let cep = inputValue.replace(/\D/g, '');

    if(!cep) {
     return resultado.innerHTML = `
            <div class="erro">
                <p>Por favor, insira um CEP.</p>
             </div>`;
    }
    
    if(cep.length !==8) {
     return resultado.innerHTML = `
            <div class="erro">
                <p>Por favor, insira um CEP com 8 digitos.</p>
             </div>`;
    }

     let response = await fetch( `https://viacep.com.br/ws/${cep}/json/`);
     let data = await response.json();

     if(data.erro) {
      return resultado.innerHTML = `
             <div class="erro">
                <p>CEP inválido. Por favor, tente novamente.</p>
             </div>`;
     }

     resultado.innerHTML = `
             <div class="result-content">
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong>  ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
             </div>`;
    
    document.getElementById('cep').value = '';
}
