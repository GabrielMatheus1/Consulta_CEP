
async function buscarCep() {
    
    let inputValue = document.getElementById('cep').value
    let resultado = document.getElementById('result')

    let cep = inputValue.replace(/\D/g, '')

    // console.log(cep)

    if(!cep || cep.length !==8) {
        resultado.innerHTML = `
            <div class="erro">
                <p>Por favor, insira um CEP.</p>
             </div>
        `
        return;
    }

     let response = await fetch( `https://viacep.com.br/ws/${cep}/json/`)
     let data = await response.json()

    //  console.log(data)

     if(data.erro) {
        resultado.innerHTML = `
             <div class="erro">
                <p>CEP inválido. Por favor, tente novamente.</p>
             </div>
        `
        return;
     }

     resultado.innerHTML = `
             <div class="result-content">
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong>  ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
             </div>
     `
}